import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { Image, ImageMonth, Month } from './store';

@Injectable()
export class AngularFireService {
    private storage: firebase.storage.Reference;

    constructor(private af: AngularFire) {
        this.storage = firebase.storage().ref();
    }

    public auth(): AngularFireAuth {
        return this.af.auth;
    }

    public login(): void {
        this.af.auth.login();
    }

    public logout(): void {
        this.af.auth.logout();
    }

    public getMonths(): Observable<Month[]> {
        return this.af.database.list('/photo365/months');
    }

    public addMonth(month: string): void {
        this.af.database.list(`/photo365/months`).push({
            name: month
        });
    }

    public deleteMonth(month: Month): void {
        this.af.database.object(`/photo365/months/${month.$key}`).remove();
        this.af.database.list(`/photo365/images/${month.$key}`).remove();
    }

    public saveImage(month: Month, image: Image, fullImage: any, thumbnailImage: any): Observable<void> {
        const path = `photo365/images/${month.name}/${image.dayOfMonth}.jpg`;
        const thumbnail = `photo365/thumbnails/${month.name}/${image.dayOfMonth}.jpg`;

        const metadata = {
            contentType: 'image/jpeg',
        };

        return Observable.fromPromise(<Promise<void>>this.storage.child(path)
            .putString(fullImage, 'data_url', metadata)
            .then(fullImageUpload => {
                this.storage.child(thumbnail)
                    .putString(thumbnailImage, 'data_url', metadata)
                    .then(thumbnailUpload => {
                        image.imageUrl = fullImageUpload.downloadURL;
                        image.thumbnailUrl = thumbnailUpload.downloadURL;

                        this.addImage(month, image);
                    }, error => console.log(error));
            }, error => console.log(error)));
    }

    public addImage(month: Month, image: Image): void {
        this.af.database.list(`/photo365/images/${month.$key}`).push(image);
    }

    public updateImage(month: Month, image: Image): void {
        this.af.database.object(`/photo365/images/${month.$key}/${image.$key}`).update(image);
    }

    public deleteImage(month: Month, image: Image): void {
        this.af.database.list(`/photo365/images/${month.$key}`).remove(image.$key);
    }

    public getImagesForMonth(month: Month): Observable<Image[]> {
        return this.af.database.list(`/photo365/images/${month.$key}`);
    }

    public getAllImages(): Observable<ImageMonth[]> {
        return this.getMonths()
            .mergeMap(months => Observable.forkJoin(months.map(month => this.getImageMonth(month))));
    }

    private getImageMonth(month: Month): Observable<ImageMonth> {
        return this.getImagesForMonth(month).map(imageList => ({ month: month.name, images: imageList }));
    }
}