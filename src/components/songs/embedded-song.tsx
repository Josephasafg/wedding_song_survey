// <iframe src="https://open.spotify.com/embed/track/5IVuqXILoxVWvWEPm82Jxr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
import Iframe from "react-iframe";

export class EmbeddedSong {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    embeddedLink(): JSX.Element {
        return (
            <Iframe url={this._url}
                    width="350px"
                    frameBorder={0}
                    allow={"encrypted-media"}
                    height="350px"/>
        )
    }
}