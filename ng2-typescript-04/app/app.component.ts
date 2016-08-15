import {Component} from 'angular2/core';
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Ng Typescript 04</h1>
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        `,
    directives : [FavoriteComponent]
})
export class AppComponent {
    post = {
        title : "Title",
        isFavorite : true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}