from pydantic import Field

from models.base_json_model import BaseJsonModel


class Song(BaseJsonModel):
    id: str
    count: str
    name: str
    embedded_url: str = Field(..., alias='embeddedURL')
