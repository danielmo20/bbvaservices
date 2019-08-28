import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as md5 from 'locutus/php/strings/md5';
@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    constructor(protected http: HttpClient) { }

    getComics() {
        let publicApikey = '4b48daa7b28aa55da26574fd3b3dae91';
        let privateApikey = '5102b7749275e2790c4d723423164aa0c20fdf8e';
        let ts = new Date().getTime();
        let hash = md5(ts + privateApikey + publicApikey);
        let offset = 1 * 60;
        let apiGetUrl = "http://gateway.marvel.com/v1/public/comics?title=avengers&orderBy=onsaleDate&limit=60&offset=" + offset + "&ts=" + ts + "&apikey=" + publicApikey + "&hash=" + hash;
        return this.http.get(apiGetUrl);
    }
}
