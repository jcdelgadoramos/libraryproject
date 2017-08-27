import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @Input() book;
  bookService: BookService;

  constructor(bookService: BookService) { 
    this.bookService = bookService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    this.bookService.removeBook(this.book.id_book);
  }

}
