export interface SongProps {
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

    constructor(artist: string, name: string, year: number, country: string) {
        this._country = country;
        this._artist = artist;
        this._name = name;
        this._year = year;
    }

    public toSongProps(): SongProps {
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
}