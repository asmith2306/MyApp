import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AgeComponent} from './age.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule, NgForm} from '@angular/forms';
import {MatSelectModule, MatInputModule} from '@angular/material';
import {User} from '../my-component/my-component.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('AgeComponent', () => {
    let component: AgeComponent;
    let fixture: ComponentFixture<AgeComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AgeComponent],
            imports: [BrowserAnimationsModule,
                ReactiveFormsModule,
                FormsModule,
                MatSelectModule,
                MatInputModule],
            providers: [NgForm]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AgeComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;

        component.user = new User();
        component.user.age = '23';

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select option 3', () => {
        expect(component.changeValue).toEqual('blah');

        let ageSelect: HTMLElement = debugElement.query(By.css('#age-select')).nativeElement;
        ageSelect.click();
        fixture.detectChanges();

        let option3: HTMLElement = debugElement.query(By.css('#mat-option-option3')).nativeElement;
        option3.click();

        fixture.detectChanges();

        expect(component.changeValue).toEqual('option3');
    });
});
