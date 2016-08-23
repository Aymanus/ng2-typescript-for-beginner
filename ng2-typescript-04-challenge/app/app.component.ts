import {Component} from 'angular2/core';
import {TweetComponent} from "./tweet.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Ng Typescript 04 - Challenge</h1>
        <tweet></tweet>
        `,
    directives : [TweetComponent]
})
export class AppComponent {

}