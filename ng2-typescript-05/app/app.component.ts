import {Component} from 'angular2/core';
import {SummaryPipe} from "./sumary.pipe";
import {FavoriteComponent} from "./favorite.component";
import {BootstrapPanel} from "./bootstrap.panel.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>NgIf</h1>
        
        <div *ngIf="courses.length > 0">
            List of courses
        </div>
        <div *ngIf="courses.length == 0">
            You don't have any courses yet.
        </div>
        
        <h1>NgSwitch</h1><br>
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'" ngSwitchDefault>List View Content</template>
        </div>
        
        <h1>NgFor</h1>
        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i + 1}} - {{course}}
            </li>
        </ul>
        
        <h1>Pipes :</h1>
        {{course.title | uppercase | lowercase}}
        <br/>
        {{course.students | number }}
        <br/>
        {{course.rating | number:'2.2-2'}}
        <br/>
        {{course.price | currency:'AUD':true:'2.2-2'}}
        <br/>
        {{course.releaseDate | date:'MMM yyyy'}}
        <br/>
        {{course | json}}
        <br/>
        
        <h1>Custom Pipe :</h1>
        {{post.title}}
        <br/>
        {{post.body | summary:10}}
        
        <h1>ngClass favorite component :</h1>
        <favorite></favorite>
        
        <h1>ngStyle :</h1>
        <button
            [ngStyle] = "{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'
            }"
        >Submit</button>
        
        <h1>Elvis Operator :</h1>
        <ul>
            <li>Title : {{task.title}}</li>
            <li>Assigned to : {{task.assignee?.name}}</li>
        </ul>
        
        <h1>ng-content :</h1>
        <bs-panel>
            <div class="heading">The Heading</div>
            <div class="body">This is the body!</div>
            <div class="body">This is another body!</div>
        </bs-panel>
        `,
    directives: [BootstrapPanel]


    ,
    pipes : [SummaryPipe],
    directives : [FavoriteComponent]
})
export class AppComponent {

    courses = ['course 1', 'course 2', 'course 3'];

    viewMode = 'map';

    course = {
        title : "Angular 2 for Beginners",
        rating : 4.9745,
        students : 5981,
        price: 99.95,
        releaseDate: new Date(2016,3,1)
    };

    post = {
        title : "Angular Tutorial for Beginners",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }

    canSave = true;

    task = {
        title: "Review applications",
        assignee: null
    }
}