import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { Image, ImageMonth, Month } from './store';

@Injectable()
export class AngularFireService {
    private storage: firebase.storage.Reference;
    private readonly ImagesPrefix = '/photo365/images';
    private readonly MonthsPrefix = '/photo365/months';

    constructor(private af: AngularFire, private router: Router) {
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
        this.router.navigate(['/']);
    }

    public getMonths(): Observable<Month[]> {
        return this.af.database.list(`${this.MonthsPrefix}`);
    }

    public addMonth(month: string, numberOfDays: number): void {
        this.af.database.list(`${this.MonthsPrefix}`).push({
            name: month,
            numberOfDays: numberOfDays,
        });
    }

    public deleteMonth(month: Month): Observable<void> {

        return this.getImagesForMonth(month)
            .mergeMap(images => {
                const observables = images.map(image => {
                    const path = this.getImageFilepath(month, image);
                    const thumbnail = this.getThumbnailFilepath(month, image);

                    return Observable.fromPromise(<Promise<void>>this.storage.child(path).delete()
                        .then(() => this.storage.child(thumbnail).delete()))
                        .first();
                });

                return Observable.forkJoin(observables)
                    .map(() => {
                        this.af.database.object(`${this.MonthsPrefix}/${month.$key}`).remove();
                        this.af.database.list(`${this.ImagesPrefix}/${month.$key}`).remove();
                    });
            });
    }

    public saveImage(month: Month, image: Image, fullImage: any, thumbnailImage: any): Observable<void> {

        if (fullImage === undefined || thumbnailImage === undefined) {
            image.imageUrl = null;
            image.thumbnailUrl = null;
            return Observable.of(this.addOrUpdateImage(month, image));
        }

        const path = this.getImageFilepath(month, image);
        const thumbnail = this.getThumbnailFilepath(month, image);

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

                        this.addOrUpdateImage(month, image);
                    }, error => console.log(error));
            }, error => console.log(error)));
    }

    private addOrUpdateImage(month: Month, image: Image): void {
        if (image.$key) {
            this.af.database.object(`${this.ImagesPrefix}/${month.$key}/${image.$key}`).update({
                dayOfMonth: image.dayOfMonth,
                hidden: image.hidden,
                prompt: image.prompt,
                imageUrl: image.imageUrl,
                thumbnailUrl: image.thumbnailUrl,
            });
        } else {
            this.af.database.list(`${this.ImagesPrefix}/${month.$key}`).push(image);
        }
    }

    public deleteImage(month: Month, image: Image): Observable<void> {

        const path = this.getImageFilepath(month, image);
        const thumbnail = this.getThumbnailFilepath(month, image);

        return Observable.fromPromise(<Promise<void>>this.storage.child(path).delete()
            .then(() => this.storage.child(thumbnail).delete()
                .then(() => this.af.database.list(`${this.ImagesPrefix}/${month.$key}`).remove(image.$key))));
    }

    public getImagesForMonth(month: Month): FirebaseListObservable<Image[]> {
        return this.af.database.list(`${this.ImagesPrefix}/${month.$key}`, { query: { orderByChild: 'dayOfMonth' } });
    }

    public getAllImages(): Observable<ImageMonth[]> {
        return this.af.database.list(`${this.ImagesPrefix}`)
            .mergeMap(() => this.getMonths()
                .mergeMap(months => {
                    return Observable.forkJoin(months.map(month => {
                        return this.getImageMonth(month).first();
                    }));
                }));
    }

    private deleteStoredImage(month: Month, image: Image): Observable<void> {
        const path = this.getImageFilepath(month, image);
        const thumbnail = this.getThumbnailFilepath(month, image);

        return Observable.fromPromise(<Promise<void>>this.storage.child(path).delete()
            .then(() => this.storage.child(thumbnail).delete()));
    }

    private getImageMonth(month: Month): Observable<ImageMonth> {
        return this.getImagesForMonth(month).map(imageList => {
            return { month: month.name, images: imageList };
        });
    }

    private getImageFilepath(month: Month, image: Image): string {
        return `photo365/images/${month.name}/${image.dayOfMonth}.jpg`;
    }

    private getThumbnailFilepath(month: Month, image: Image): string {
        return `photo365/thumbnails/${month.name}/${image.dayOfMonth}.jpg`;
    }
}