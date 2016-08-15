import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector : 'favorite',
    template: `
        <br>Exercice :<br>
        <i 
            class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
            
        </i>
        `
})
export class FavoriteComponent {

    @Input('is-favorite')
    isFavorite = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue : this.isFavorite});
    }

}