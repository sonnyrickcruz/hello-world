import {Component} from '@angular/core';


@Component({
    selector: 'hello-world',
    templateUrl: 'hello-world.component.html',
    styleUrls: ['hello-world.component.css']
})

export class HelloWorldComponent {
    color = 'fuchsia';
    angry = true;
    name = 'rick';
    date = {
        name: 'october',
        day: 24,
        year: 2017,
        toString: function() {
            return this.name;
        }
    }
    imageUrl = 'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif';

    ngOnInit() {
        // inherit context of the parent
        setInterval(() => {
            //this.angry = !this.angry;
        }, 1000);
    }
    
    greet(): string {
        return `Hello, ${this.name}`;
    }

    changeName() {
        this.name = 'sonny';
    }
    
    changeName2(event) {
        this.name = event.target.value;
    }
}