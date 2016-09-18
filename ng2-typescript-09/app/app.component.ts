import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService} from "./post.service";
import {GitHubProfileComponent} from "./github-profile.component";

@Component({
    selector: 'my-app',
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <github-profile></github-profile>
    `,
    providers:	[PostService, HTTP_PROVIDERS],
    directives : [GitHubProfileComponent]
})
export class AppComponent implements OnInit{

    isLoading = true;

    constructor(private _postService : PostService){
        //this._postService.createPost({userId : 1, title :"a", body:"b"});
    }

    ngOnInit(){
        this._postService.getPosts().then(posts => {
            console.log(posts);
            this.isLoading = false;
        });
    }

}