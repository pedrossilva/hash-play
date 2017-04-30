import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <div class="field" [class.pointer]="!value">
        <i *ngIf="value" class="fa" [class.fa-times]="value == 'x'" [class.fa-circle-o]="value == 'o'" 
        [class.winner]="winner" [ngClass]="'pulse-'+value"></i>
        <i *ngIf="!value" class="opaque fa" [class.fa-times]="player == 'x'" [class.fa-circle-o]="player == 'o'"></i>
    </div>`,
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  private _value:string;
  get value() { return this._value }
  @Input('val') set value(v:string) {
    this._value = v;
  }

  private _player:string;
  get player() { return this._player }
  @Input() set player(p:string) {
    this._player = p;
  }

  @Input() winner:string;

  constructor() { }

  ngOnInit() {
  }

}
