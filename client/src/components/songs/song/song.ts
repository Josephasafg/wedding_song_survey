import {EmbeddedSong} from "../embedded-song";

export interface SongInfo {
    artist: string
    track: string
    year: number
    country: string
}

export class Song {
    private _country: string;
    private _artist: string;
    private _name: string;
    private _year: number;
    private _embeddedLink: EmbeddedSong;

    constructor(artist: string, name: string, year: number, country: string, embeddedLink: EmbeddedSong) {
        this._country = country;
        this._artist = artist;
        this._name = name;
        this._year = year;
        this._embeddedLink = embeddedLink;
    }

    public toSongProps(): SongInfo {
        return {
            artist: this._artist,
            track: this._name,
            country: this._country,
            year: this._year
        }
    }

    get title(): string {
        return `${this._name} - ${this._artist}`
    }

    get embeddedLink(): JSX.Element {
        return this._embeddedLink.embeddedLink();
    }
}