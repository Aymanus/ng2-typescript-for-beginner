import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from './post';
import {Promise} from "es6-promise";

@Injectable()
export	class	PostService	{

    private _url="http://jsonplaceholder.typicode.com/posts";

    constructor (private _http: Http) {
    }

    getPosts() : Promise<Post[]>{
        return this._http.get(this._url).map(res => res.json()).toPromise();
    }

    createPost(post : Post){
        this._http.post(this._url, JSON.stringify(post)).map(res => res.json());
    }
}