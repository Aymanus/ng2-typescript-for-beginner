import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    onSubmit(form){
        console.log(form);
    }

    ngOnInit() { }
}