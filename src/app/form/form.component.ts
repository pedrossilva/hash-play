import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form:FormGroup = new FormBuilder().group({
    player1: ['', Validators.required],
    player2: ['', Validators.required],
    rounds: [5, Validators.required]
  });

  constructor() { }

  // private _form:FormGroup;
  // get form() { return this._form }
  // @Input('formGroup') set form(f:FormGroup) {
  //   if(f instanceof FormGroup) this.form = f;
  // }

  ngOnInit() {
  }

}
