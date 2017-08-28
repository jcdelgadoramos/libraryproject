import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { AppLoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { FieldComponent } from './field/field.component';
import { MaterialComponent } from './material/material.component';
import { MarcService } from './marc.service';
import { BookService } from './book.service';
import { BookDetailService } from './book-detail.service';
import { UserService } from './user.service';
import { ListComponent } from './list/list.component';

const routes = [
  { path: '', component: AppLoginComponent },
  { path: 'navigate', component: NavigateComponent },
  { path: 'field', component: FieldComponent },
  /*{ path: 'book', component: MaterialFullComponent, children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: ':id_book', component: MaterialFullComponent }
  ] },
  { path: 'book/:id_book', component: MaterialEditComponent },
  { path: 'book/:new', component: MaterialEditComponent },
  { path: 'edit', component: MaterialEditComponent, children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'new', component: MaterialEditComponent },
    { path: ':id', component: MaterialEditComponent }
  ] },*/
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: MaterialEditComponent },
  { path: 'edit/new', component: MaterialEditComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    NavigateComponent,
    MaterialEditComponent,
    FieldComponent,
    MaterialComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MarcService,
    BookService,
    BookDetailService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
