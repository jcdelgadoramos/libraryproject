import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookService: BookService;
  books = [];
  authors = [];
  years = [];

  autor=null;
  year=null;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.books = bookService.getBooks();
    this.authors = bookService.getAuthors();
    this.years = bookService.getYears();
  }

  ngOnInit() {
  }
  
  filterByAuthor(){
    this.books = this.bookService.listBooksPerAuthor(this.autor);
    this.year=null;
  }
  
  filterByYear(){
    this.books = this.bookService.listBooksPerYear(this.year);
    this.autor=null;
  }

}
