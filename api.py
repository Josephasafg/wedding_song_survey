from typing import List

import firebase_admin
from fastapi import FastAPI, Depends
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request

from dependecies import get_songs_controller
from models.song import Song
from songs_controller.songs_controller import SongsController


def authenticate_with_file() -> None:
    """
    Initialize the firestore app with the json key
    :return:
    """
    firebase_admin.initialize_app()


app = FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins='http://localhost:3000,https://fierce-wildwood-60677.herokuapp.com/',
                   allow_credentials=True,
                   allow_methods=['*'],
                   allow_headers=['*'])


@app.get('/get-songs')
def get_songs(songs_controller: SongsController = Depends(get_songs_controller)) -> List[Song]:
    return songs_controller.get_songs()


@app.put('/song/{song_id}/update')
def update_songs(song_id: str,
                 request: Request,
                 songs_controller: SongsController = Depends(get_songs_controller)):
    ip_address = request.client.host

    songs_controller.vote(song_id=song_id, ip_address=ip_address)
