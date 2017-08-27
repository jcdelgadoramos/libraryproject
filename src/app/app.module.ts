import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FieldComponent } from './field/field.component';
import { MaterialComponent } from './material/material.component';
import { MarcService } from './marc.service';
import { BookService } from './book.service';
import { BookDetailService } from './book-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    NavigateComponent,
    MaterialEditComponent,
    FieldComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MarcService,
    BookService,
    BookDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
