from fastapi import Depends
from google.cloud import firestore

from songs_controller.songs_controller import SongsController
from songs_controller.songs_service import SongService
from songs_controller.voter_service import VoterService


def quickstart_new_instance():
    # [START firestore_setup_client_create]
    from google.cloud import firestore

    # Project ID is determined by the GCLOUD_PROJECT environment variable
    db = firestore.Client()
    # [END firestore_setup_client_create]

    return db


def get_songs_controller(db: firestore.Client = Depends(quickstart_new_instance)) -> SongsController:
    songs_service = SongService(db)
    voter_service = VoterService(db)

    return SongsController(songs_service=songs_service, voter_service=voter_service)
