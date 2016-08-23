import {Component} from "angular2/core";
import {LikeComponent} from "./like.component";
import {TweetService} from "./tweet.service";

@Component({
    selector : 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people?1" alt="asba">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <h5 class="media-heading">Description</h5>
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike">
                </like>
            </div>
            
        </div>
        `,
    directives : [LikeComponent],
    providers : [TweetService]
})
export class TweetComponent {

    tweet = {
        totalLikes : 10,
        iLike: false
    }

    tweets;

    constructor(tweetService : TweetService){
        this.tweets = tweetService.getTweets();
    }


}