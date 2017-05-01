import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FieldComponent } from './field/field.component';
import { FormModule } from "./form/form.module";

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
