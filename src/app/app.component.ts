import {Component, ViewChild} from '@angular/core';
import {FormComponent} from "./form/form.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted:boolean = false;
  private previousPlayers:any;
  play:boolean = false;
  form:FormGroup;
  @ViewChild(FormComponent) set formComponent(fc:FormComponent) {
    setTimeout(() => {
      this.form = fc.form;
    })
  }

  formSubmit() {
    this.submitted = true;
    if(this.form.valid) this.play = true;
  }

  newPlay() {
    this.play = false;
    this.submitted = false;
    this.previousPlayers = this.form.value;
    this.form.reset();
  }

  keepPlayers() {
    this.form.patchValue(this.previousPlayers);
  }
}
