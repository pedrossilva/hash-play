/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FrameComponent} from "./frame/frame.component";
import {FormModule} from "./form/form.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FieldComponent} from "./field/field.component";
import {FormComponent} from "./form/form.component";

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    TestBed.compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have form', async(() => {
    app.form = new FormComponent().form;

    expect(Object.keys(app.form.controls)).toEqual([
      'playerX', 'playerO'
    ]);
  }));

  it('form valid', async(() => {
    app.form = new FormComponent().form;
    app.form.patchValue({playerX: 'Player X', playerO: 'Player O'});
    app.formSubmit();
    expect(app.form.valid).toBeTruthy();
  }));

  it('form - empty', async(() => {
    app.form = new FormComponent().form;
    app.formSubmit();
    let ex = [
      app.form.valid,
      app.form.get('playerX').valid,
      app.form.get('playerO').valid,
      app.form.errors['different']
    ];
    let eq = [ false, false, false, true ];
    expect(ex).toEqual(eq);
  }));

  it('form - name of players equal', async(() => {
    app.form = new FormComponent().form;
    app.form.patchValue({playerX: 'Player X', playerO: 'Player X'});
    app.formSubmit();
    expect(app.form.valid).toBeFalsy();
  }));

  it('form - empty name of player X', async(() => {
    app.form = new FormComponent().form;
    app.form.patchValue({playerO: 'Player O'});
    app.formSubmit();
    expect(app.form.valid).toBeFalsy();
  }));

  it('form - empty name of player O', async(() => {
    app.form = new FormComponent().form;
    app.form.patchValue({playerX: 'Player X'});
    app.formSubmit();
    expect(app.form.valid).toBeFalsy();
  }));

});
