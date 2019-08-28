// comics-get.component.ts

import { Component, OnInit } from '@angular/core';
import Comic from '../Comic';
import { MarvelService } from '../marvel.service';

@Component({
    selector: 'app-comic-get',
    templateUrl: './comics-get.component.html',
    styleUrls: ['./comics-get.component.css']
})
export class ComicGetComponent implements OnInit {
    
    comics: any[] = [];
    
    constructor(private marvelService: MarvelService) { }

    ngOnInit() {
        this.marvelService.getComics()
            .subscribe(
                (data) => {
                    this.comics = data['data'].results;
                },
                (error) => {
                    console.error(error);
                }
            );
    }
}