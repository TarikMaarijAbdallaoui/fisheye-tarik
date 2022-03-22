class PhotographerMediaFactory {

    constructor(media) {
        this._imageUrl = media.image;
        this._videoUrl = media.video;
       
        switch (this.mediaType) {
            case 'image':
                return new PhotographerMediaImage(media);
            case 'video':
                return new PhotographerMediaVideo(media);
            default:
                throw new Error('Unknown media format');
        }
    }

    get mediaType() {
        if (this._imageUrl) return 'image';
        else if (this._videoUrl) return 'video';
        else throw new Error('Unknown media type format');
    }
}

class PhotographerMediaImage {

    constructor(media) {
        this._photographerId = media.photographerId;
        this._id = media.id;
        this._title = media.title;
        this._imageUrl = media.image;
        this._totalLikes = media.likes;
    }

    get mediaUrl() {
        return `assets/photographers/${this._photographerId}/${this._imageUrl}`;
    }

    get mediaType() {
        return 'image';
    }

    get mediaCard() {
        return `<img src="${this.mediaUrl}" title="${this._title}, closeup view" alt="${this._title}">`;
    }
}