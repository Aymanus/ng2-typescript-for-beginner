import {Component} from 'angular2/core';
import {FavoriteComponent} from "./favorite.component";
import {LikeComponent} from "./like.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Ng Typescript 04</h1>
        
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)">
        </favorite>
        
        <i class="glyphicon glyphicon-star">
        </i>
        
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike">
        </like>
        
        `,
    directives : [FavoriteComponent, LikeComponent]
})
export class AppComponent {
    post = {
        title : "Title",
        isFavorite : true
    }

    tweet = {
        totalLikes : 10,
        iLife: false
    }

    onFavoriteChange($event){
        console.log($event);
    }


}