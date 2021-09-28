from google.cloud import firestore

COLLECTION_NAME = u'voters'


class VoterService:
    def __init__(self, db: firestore.Client):
        self._db = db

    def has_user_voted(self, ip_address: str) -> bool:
        voters = self._db.collection(COLLECTION_NAME).stream()

        return any(voter.id == ip_address for voter in voters)
