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

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.books = bookService.availableBooks;
  }

  ngOnInit() {
  }
  
  getMaterials() {
    return this.books.slice();
  }

}
