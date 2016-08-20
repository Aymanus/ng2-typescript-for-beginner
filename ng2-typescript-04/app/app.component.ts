import {Component} from 'angular2/core';
import {FavoriteComponent} from "./favorite.component";
import {LikeComponent} from "./like.component";
import {VoteComponent} from "./vote.component";

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
        
        <vote 
            [voteCount]="vote.voteCount" 
            [myVote]="vote.myVote"
            (vote)="onVote($event)">
        </vote>
        
        `,
    directives : [FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent {
    post = {
        title : "Title",
        isFavorite : true
    }

    tweet = {
        totalLikes : 10,
        iLike: false
    }

    vote = {
        voteCount : 10,
        myVote: false
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }


}