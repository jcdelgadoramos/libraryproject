import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  bookService: BookService;
  books = []; 

  busqueda;
  filtro = '';

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.books = bookService.getBooks();
  }

  ngOnInit() {
  }
  
  getMaterials() {
    return this.books.slice();
  }

  filter(){
    console.log(this.busqueda);
    this.books = this.bookService.filterBooks(this.filtro, this.busqueda);
  }

}
