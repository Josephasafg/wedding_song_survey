from typing import List

from models.song import Song
from .songs_service import SongService
from .voter_service import VoterService


class SongsController:
    def __init__(self, songs_service: SongService, voter_service: VoterService):
        self._songs_service = songs_service
        self._voter_service = voter_service

    def get_songs(self) -> List[Song]:
        return self._songs_service.get_songs()

    def vote(self, ip_address: str, song_id: str):
        has_voted = self._voter_service.has_user_voted(ip_address)

        if has_voted:
            raise ValueError(f'User with ip: {ip_address} has already voted')

        self._songs_service.vote(song_id)

    def get_winning_song(self) -> Song:
        return self._songs_service.get_winning_song()
