from typing import List

import firebase_admin
from fastapi import FastAPI, Depends
from google.cloud import firestore

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
    yield


app = FastAPI()


@app.get('/songs', dependencies=[Depends(authenticate_with_file)])
def get_songs(db: firestore.Client = Depends(quickstart_new_instance)) -> List[Song]:
    songs = db.collection(u'songs').stream()

    return [Song(**song.to_dict()) for song in songs]
