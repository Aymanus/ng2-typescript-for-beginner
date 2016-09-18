import {Component} from 'angular2/core';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}