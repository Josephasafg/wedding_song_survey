from typing import List

import firebase_admin
from fastapi import FastAPI, Depends
from google.cloud import firestore
from starlette.responses import Response

from server.src.survey_server.models.song import Song


def quickstart_new_instance():
    # [START firestore_setup_client_create]
    from google.cloud import firestore

    # Project ID is determined by the GCLOUD_PROJECT environment variable
    db = firestore.Client()
    # [END firestore_setup_client_create]

    return db


def authenticate_with_file():
    firebase_admin.initialize_app()


app = FastAPI()


@app.get('/songs')
def get_songs(db: firestore.Client = Depends(quickstart_new_instance)) -> List[Song]:
    songs = db.collection(u'songs').stream()

    return [Song(**song.to_dict()) for song in songs]


@app.put('/song/{song_id}/update')
def update_songs(song_id: str,
                 db: firestore.Client = Depends(quickstart_new_instance)):
    song_document = db.collection(u'songs').document(song_id)

    try:
        song_document.update({'count': firestore.Increment(1)})
    except Exception as e:
        print(f'Failed to update song: {song_id} due to an exception: {e}')
        return Response(status_code=500)

    print(f'Updated song: {song_id}!')
    return Response(status_code=200)
