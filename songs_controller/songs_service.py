from typing import List

from google.cloud import firestore

from models.song import Song

COLLECTION_NAME = u'songs'


class SongService:
    def __init__(self, db: firestore.Client):
        self._db = db

    def get_songs(self) -> List[Song]:
        songs = self._db.collection(COLLECTION_NAME).stream()

        return [Song(**song.to_dict()) for song in songs]

    def vote(self, song_id: str) -> None:
        """
        Increment song's count field by one
        """
        song_document = self._db.collection(COLLECTION_NAME).document(song_id)

        song_document.update({'count': firestore.Increment(1)})

    def get_winning_song(self) -> Song:
        songs_doc = self._db.collection(COLLECTION_NAME).stream()
        songs = [Song(**song.to_dict()) for song in songs_doc]

        return max(songs, key=lambda song: int(song.count))
