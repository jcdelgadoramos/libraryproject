import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {

  activatedRoute: ActivatedRoute;  
  bookService: BookService;
  selectedBook = {  id_book: null, 
                    numero_ejemplares: null, 
                    autor: '', 
                    titulo: '',
                    editorial: '',
                    fecha_publicacion: null,
                    portada: ''
  };

  constructor(activatedRoute: ActivatedRoute, bookService: BookService) {
    this.activatedRoute = activatedRoute;
    this.bookService = bookService;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {         
        let id= +this.activatedRoute.snapshot.params["id"]; 
        //console.log(params['id']);
        console.log(id);
        this.selectedBook = this.bookService.mapBook(id);
      }
    );
  }


  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.bookService.submitBook(submittedForm.value.id_book,
                                submittedForm.value.autor,
                                submittedForm.value.titulo, 
                                submittedForm.value.editorial,
                                submittedForm.value.fecha_publicacion,
                                submittedForm.value.numero_ejemplares,
                                submittedForm.value.portada);
    
  }

  goBack() {

  }

}
