package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"cloud.google.com/go/firestore"
	"github.com/gorilla/mux"

	"log"

	firebase "firebase.google.com/go"
	"github.com/rs/cors"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

// CORSRouterDecorator applies CORS headers to a mux.Router
type CORSRouterDecorator struct {
	R *mux.Router
}

// ServeHTTP wraps the HTTP server enabling CORS headers.
// For more info about CORS, visit https://www.w3.org/TR/cors/
func (c *CORSRouterDecorator) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	if origin := req.Header.Get("Origin"); origin != "" {
		log.Println(origin)
		rw.Header().Set("Access-Control-Allow-Origin", origin)
		rw.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		rw.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type")
	}
	// Stop here if its Preflighted OPTIONS request
	if req.Method == "OPTIONS" {
		return
	}

	c.R.ServeHTTP(rw, req)
}

type Song struct {
	Id          int64  `firestore:"id,omitempty" json:"id"`
	Count       int64  `firestore:"count,omitempty" json:"count"`
	Name        string `firestore:"name,omitempty" json:"name"`
	EmbeddedURL string `firestore:"embeddedURL,omitempty" json:"embeddedURL"`
}

type SongResponse struct {
	Songs []Song `json:"songs"`
}

func main() {
	log.Print("Starting Server")

	router := mux.NewRouter()

	router.HandleFunc("/get-songs", basicAuth(getSongs)).Methods("GET")
	router.HandleFunc("/song/{songId}/update", basicAuth(updateSong)).Methods("POST")

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		// AllowCredentials: true,
		// Enable Debugging for testing, consider disabling in production
		// Debug: true,
	})

	handler := c.Handler(router)
	http.ListenAndServe(":8080", handler)

	// http.Handle("/", &CORSRouterDecorator{router})
}

type ClientRequest struct {
	client *firestore.Client
	id     string
}

func createClientRequest(client *firestore.Client, r *http.Request) ClientRequest {
	pathParams := mux.Vars(r)

	parsedId, _ := strconv.ParseInt(pathParams["songId"], 10, 64)

	if parsedId > 4 {
		// Raise Error
		log.Fatal("Id does not exist")
	}

	return ClientRequest{client: client, id: pathParams["songId"]}
}

func basicAuth(handler func(ClientRequest) []Song) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		//w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		//w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, POST")

		sa := option.WithCredentialsFile("")
		app, err := firebase.NewApp(context.Background(), nil, sa)
		client, err := app.Firestore(context.Background())

		if err != nil {
			log.Fatal(err)
		}

		clientRequest := createClientRequest(client, r)
		endPointresponse := handler(clientRequest)

		if endPointresponse != nil {
			songResponse := SongResponse{Songs: endPointresponse}
			songList, err := json.Marshal(songResponse)

			if err != nil {
				log.Fatal()
			}

			w.Write(songList)
		}

		defer client.Close()
	}
}

func getSongs(clientRequest ClientRequest) []Song {
	iter := clientRequest.client.Collection("songs").Documents(context.Background())

	songs := make([]Song, 0)

	for {
		doc, err := iter.Next()

		if err == iterator.Done {
			break
		}

		if err != nil {
			log.Fatal(err)
			break
		}

		log.Print(doc.Data())
		var song Song
		doc.DataTo(&song)

		log.Println(song)
		songs = append(songs, song)
	}

	return songs
}

func updateSong(clientRequest ClientRequest) []Song {

	docSong := clientRequest.client.Collection("songs").Doc(clientRequest.id)

	ctx := context.Background()

	_, err := docSong.Update(ctx, []firestore.Update{
		{Path: "count", Value: firestore.Increment(1)},
	})

	if err != nil {
		fmt.Errorf("Update: %v", err)
	}

	log.Print("Updated Value!")

	songs := make([]Song, 0)

	return append(songs, Song{})
}