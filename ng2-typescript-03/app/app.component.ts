import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>
    <img src="{{ imageUrl }}" />
    <!--<img [src]="imageUrl" />
    <img bind-src="imageUrl" />-->
    <br>
    <button class="btn btn-primary" [class.active]="isActive"
        [style.backgroundColor] = "isActive ? 'blue' : 'gray'">Submit</button>
     
     <br>Event Binding :<br>
     <div (click)="onDivClick()">
        <button (click)="onClick($event)" >Submit</button>
     </div>
     
     <br>Two way Binding :<br>
      <input type="text" [(ngModel)]="title"/>
      <input type="button" (click)="title=''" value="Clear"/>
      
      <br>Exercice :<br>
      
      
    `
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200/"
    isActive = true;

    onClick($event){
        $event.stopPropagation();
        console.log("Clicked", $event);
    }
    onDivClick(){
        console.log("Div Clicked");
    }
}