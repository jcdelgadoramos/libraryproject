import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  availableBooks = [
    { id_book: 1, 
      numero_ejemplares: 3, 
      autor: 'Alice Humprey', 
      titulo: 'Horror en la villa',
      editorial: 'Alfaguara',
      fecha_publicacion: '1998',
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 2, 
      numero_ejemplares: 7, 
      autor: 'Sir Edwin Braniff', 
      titulo: 'Lucha de hormigueros',
      editorial: 'Mitosis',
      fecha_publicacion: '2008',
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 3, 
      numero_ejemplares: 5, 
      autor: 'Eliana Torrelodones', 
      titulo: 'La cruz helada',
      editorial: 'Literatura Mondadori',
      fecha_publicacion: '2011',
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 4, 
      numero_ejemplares: 2, 
      autor: 'Juan Álvaro Caviezes-Guerra', 
      titulo: 'Las guerras termodinámicas',
      editorial: 'Fondo Editorial UNASUFIL',
      fecha_publicacion: '1981',
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 5, 
      numero_ejemplares: 11, 
      autor: 'Dempsey Thomas', 
      titulo: 'El hastío hereje',
      editorial: 'Pearson',
      fecha_publicacion: '2015',
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    }
  ];

  constructor() { }

}
