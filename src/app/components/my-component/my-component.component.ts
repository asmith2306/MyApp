import {Component, OnInit} from '@angular/core';

export class User {
    name = '';
    address = '';
    age = '';
    option = '';
}

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

    user: User = new User();

    constructor() {}

    ngOnInit() {

    }
    
    onSubmit(){
        console.log(this.user)
    }

}
