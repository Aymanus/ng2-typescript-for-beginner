import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";

@RouteConfig([
    {path : 'albums', name : 'Albums', component : AlbumsComponent, useAsDefault : true},
    {path : 'contact', name : 'Contact', component : ContactComponent},
    {path : '*other', name : 'Other', redirectTo : ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives : [ROUTER_DIRECTIVES]
})
export class AppComponent {
}