import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CanDeactivate} from "angular2/router";

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate{

    constructor (private _router : Router){

    }
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
        return confirm ("Are you sure?");
    }
}