import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
 
import { AppComponent } from './app.component';
import { AppLoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FieldComponent } from './field/field.component';
import { MaterialComponent } from './material/material.component';
import { MaterialFullComponent } from './material-full/material-full.component';
import { MarcService } from './marc.service';
import { BookService } from './book.service';
import { BookDetailService } from './book-detail.service';

const routes = [
  { path: '', component: NavigateComponent },
  { path: 'field', component: FieldComponent },
  /*{ path: 'book', component: MaterialFullComponent, children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: ':id_book', component: MaterialFullComponent }
  ] },*/
  { path: 'book/:id_book', component: MaterialEditComponent },
  { path: 'book/:new', component: MaterialEditComponent },
  /*{ path: 'edit', component: MaterialEditComponent, children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'new', component: MaterialEditComponent },
    { path: ':id', component: MaterialEditComponent }
  ] },*/
  { path: 'edit/:id', component: MaterialEditComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    NavigateComponent,
    MaterialEditComponent,
    MaterialFullComponent,
    FieldComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MarcService,
    BookService,
    BookDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
