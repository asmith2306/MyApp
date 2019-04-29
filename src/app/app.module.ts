import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponentComponent} from './components/my-component/my-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgeComponent} from './components/age/age.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule, MatSelectModule, MatInputModule} from '@angular/material/';

@NgModule({
    declarations: [
        AppComponent,
        MyComponentComponent,
        AgeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
