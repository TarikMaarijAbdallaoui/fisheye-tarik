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