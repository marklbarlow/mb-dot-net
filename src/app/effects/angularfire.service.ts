import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Image, ImageMonth } from '../store';
import { environment } from '../../environments/environment';

export class AngularFireService {
    private storage: firebase.storage.Reference;

    constructor(private af: AngularFire) {
        // firebase.initializeApp(environment.firebase);
        // this.storage = firebase.storage().ref();
    }

    public getImages(): FirebaseListObservable<ImageMonth[]> {
        return this.af.database.list('/photo365/galleries').map(x => x.reverse()) as FirebaseListObservable<ImageMonth[]>;
    }

    public saveImage(image: Image, fullImage: any, thumbnailImage: any): void {
        // const path = 'images/test.jpg';
        // const thumbnail = 'thumbnail/test.jpg';

        // this.storage.child(path)
        //     .putString(fullImage)
        //     .then(fullImageUpload => {
        //         this.storage.child(thumbnail)
        //             .putString(thumbnailImage)
        //             .then(thumbnailUpload => {
        //                 image.url = fullImageUpload.downloadURL;
        //                 this.getImages().push(image);
        //             });
        //     });
    }
}