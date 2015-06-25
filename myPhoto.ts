/// <reference path="typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    NgFor
    } from 'angular2/angular2';

import {Flickr} from 'flickr';

@Component({
    selector: 'photo-view',
    appInjector: [Flickr]
})
@View({
    template: `<input type="search" #photoquery />
  <button (click)="searchPhotos(photoquery.value)">Search photos</button>
  <ul>
    <li *ng-for="#photo of photos">
      <img [src]="createFlickrImagePath(photo)" width="250px">
    </li>
  </ul>`,
    directives: [NgFor]
})
export class PhotoView {
    flickr;
    photos;

    constructor(flickr: Flickr) {
        this.flickr = flickr;
    }

    /**
     * Search photos with a given query
     * @param {string} query the query to search with
     */
    searchPhotos(query: string) {
        this.flickr.searchPhotos(query).then((photos) => {
            this.photos = photos;
        });
    }

    /**
     * Creates a flickr image path
     * @param photo the photo object to create the photo URL from
     * @returns {string} the photo URL
     */
    createFlickrImagePath(photo) {
        return this.flickr.createPhotoUrl(photo);
    }
}