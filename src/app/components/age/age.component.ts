import {Component, OnInit, Input} from '@angular/core';
import {User} from '../my-component/my-component.component';
import {ControlContainer, NgForm} from '@angular/forms';
import {MatSelectChange} from '@angular/material';

@Component({
    selector: 'app-age',
    templateUrl: './age.component.html',
    styleUrls: ['./age.component.scss'],
    viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class AgeComponent implements OnInit {

    @Input()
    user: User;

    options = ['option1', 'option2', 'option3']

    changeValue = 'blah';

    constructor() {}

    ngOnInit() {
    }

    doChange(event: MatSelectChange) {
        this.changeValue = event.value;
    }

}
