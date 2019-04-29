import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyComponentComponent} from './my-component.component';
import {AgeComponent} from '../age/age.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule, MatSelectModule, MatInputModule} from '@angular/material';

xdescribe('MyComponentComponent', () => {
    let component: MyComponentComponent;
    let fixture: ComponentFixture<MyComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyComponentComponent, AgeComponent],
            imports: [BrowserAnimationsModule,
                ReactiveFormsModule,
                FormsModule,
                MatButtonModule,
                MatSelectModule,
                MatInputModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
