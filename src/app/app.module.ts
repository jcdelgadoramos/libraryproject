import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FieldComponent } from './field/field.component';
import { MaterialTypeComponent } from './material-type/material-type.component'
import { SubfieldComponent } from './subfield/subfield.component';
import { MaterialEditSubfieldComponent } from './material-edit-subfield/material-edit-subfield.component';
import { MaterialComponent } from './material/material.component';
import { MaterialEditFieldComponent } from './material-edit-field/material-edit-field.component';
import { MaterialTypeFieldComponent } from './material-type-field/material-type-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    NavigateComponent,
    MaterialEditComponent,
    FieldComponent,
    MaterialTypeComponent,
    SubfieldComponent,
    MaterialEditSubfieldComponent,
    MaterialComponent,
    MaterialEditFieldComponent,
    MaterialTypeFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
