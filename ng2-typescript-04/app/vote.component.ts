import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector : 'vote',
    template : `
        <br>Vote :<br>
        <div class="voter">
            <i 
                class="glyphicon glyphicon-menu-up vote-button" 
                [class.highlighted]="myVote==1"
                (click)="upVote()">
            </i>
            <br>
            <span class = "vote-count">{{voteCount + myVote}}</span>
            <br>
            <i 
                class="glyphicon glyphicon-menu-down vote-button" 
                [class.highlighted]="myVote==-1"
                (click)="downVote()">
            </i>
        </div>
        `,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }
        .vote-count {
            font-size : 1.2em;
        }
        .vote-button{
            cursor : pointer;
        }
        .glyphicon-menu-up {
            color: #ccc;
            cursor : pointer;
        }
        .glyphicon-menu-down {
            color: #ccc;
            cursor : pointer;
        }
        .highlighted {
            color : deeppink;
        }
    `]
})
export class VoteComponent {

    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote(){
        if(this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({ myVote : this.myVote});
    }

    downVote(){
        if(this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({ myVote : this.myVote});
    }
}