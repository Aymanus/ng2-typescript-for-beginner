import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent],
    template: `<contact-form></contact-form>`
})
export class AppComponent {

}