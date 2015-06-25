/// <reference path="typings/angular2/angular2.d.ts" />

const API_KEY = '<INSERT_YOUR_API_KEY>';

export class Flickr {
    /**
     *
     * @param {string} query the search term
     * @returns {Promise} Promise containing the photo list
     */
    searchPhotos(query: string) {
        return fetch(`https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=${API_KEY}&text=${query}&format=json&nojsoncallback=1`)
        .then(function (response) {
                return response.json().then(function(jsonResponse) {
                    return jsonResponse.photos.photo;
                });
            });
    }

    /**
     * Creates the photo url according to Flickr's specs
     * @param photo the photo object to create an image URL from
     * @returns {string} The photo URL for the photo
     */
    createPhotoUrl(photo) {
        var farm = photo.farm;
        var server = photo.server;
        var id = photo.id;
        var secret = photo.secret;

        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }
}