import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() submitted:boolean = false;

  public form:FormGroup = new FormBuilder().group(
    {
      playerX: ['', Validators.required],
      playerO: ['', Validators.required]
    },
    { validator: differentPlayer }
  );

  constructor() { }

}

// custom validation
export const differentPlayer = (control: AbstractControl): {[key: string]: boolean} => {
  const playerX = control.get('playerX');
  const playerO = control.get('playerO');
  if (!playerX || !playerO) return null;
  return playerX.value === playerO.value ? { different: true } : null;
};
