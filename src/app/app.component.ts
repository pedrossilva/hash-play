import {Component, ViewChild} from '@angular/core';
import {FormComponent} from "./form/form.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  play:boolean = false;
  form:FormGroup;
  @ViewChild(FormComponent) set formComponent(fc:FormComponent) {
    setTimeout(() => {
      this.form = fc.form;
    })
  }

  formSubmit() {
    this.play = true;
  }

}
