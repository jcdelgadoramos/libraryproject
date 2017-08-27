import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-material-full',
  templateUrl: './material-full.component.html',
  styleUrls: ['./material-full.component.css']
})
export class MaterialFullComponent implements OnInit {
  id;
  activatedRoute: ActivatedRoute;  
  bookService: BookService;
  selectedBook = {  id_book: null, 
                    numero_ejemplares: null, 
                    autor: '', 
                    titulo: '',
                    editorial: '',
                    fecha_publicacion: '',
                    portada: ''
  };

  constructor(activatedRoute: ActivatedRoute, bookService: BookService) {
    this.activatedRoute = activatedRoute;
    this.bookService = bookService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = +params['id_book'];
        console.log(params['id_book']);
        this.selectedBook = this.bookService.mapBook(params.id_book);
      }
    );
  }

}
