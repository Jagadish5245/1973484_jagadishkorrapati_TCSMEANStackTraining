import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import {ChildComponent} from './child.component'
import {child1}         from './child1.component'

@NgModule({
  declarations: [
    AppComponent,ChildComponent,child1,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
