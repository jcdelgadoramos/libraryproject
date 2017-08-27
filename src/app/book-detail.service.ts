import { Injectable } from '@angular/core';

import { MarcService } from './marc.service';

@Injectable()
export class BookDetailService {

  private marcService: MarcService;

  availableBookDetails = [
    { id_book: 1, id_marc: '007', valor: '4'},
    { id_book: 1, id_marc: '100', valor: 'Alice Humprey'},
    { id_book: 1, id_marc: '245', valor: 'Horror en la villa'},
    { id_book: 1, id_marc: '250', valor: 'Alfaguara'},
    { id_book: 1, id_marc: '260', valor: '1998'},
    { id_book: 1, id_marc: '300', valor: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'},
    { id_book: 2, id_marc: '007', valor: '3'},
    { id_book: 2, id_marc: '100', valor: 'Sir Edwin Braniff'},
    { id_book: 2, id_marc: '245', valor: 'Lucha de hormigueros'},
    { id_book: 2, id_marc: '250', valor: 'Editorial Mitosis'},
    { id_book: 2, id_marc: '260', valor: '2008'},
    { id_book: 2, id_marc: '300', valor: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'},
    { id_book: 3, id_marc: '007', valor: '5'},
    { id_book: 3, id_marc: '100', valor: 'Eliana Torrelodones'},
    { id_book: 3, id_marc: '245', valor: 'La cruz helada'},
    { id_book: 3, id_marc: '250', valor: 'Literatura Mondadori'},
    { id_book: 3, id_marc: '260', valor: '2011'},
    { id_book: 3, id_marc: '300', valor: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'},
    { id_book: 4, id_marc: '007', valor: '6'},
    { id_book: 4, id_marc: '100', valor: 'Juan Álvaro Caviezes-Guerra'},
    { id_book: 4, id_marc: '245', valor: 'Las guerras termodinámicas'},
    { id_book: 4, id_marc: '250', valor: 'Fondo Editorial UNASUFIL'},
    { id_book: 4, id_marc: '260', valor: '1981'},
    { id_book: 4, id_marc: '300', valor: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'},
    { id_book: 5, id_marc: '007', valor: '11'},
    { id_book: 5, id_marc: '100', valor: 'Dempsey Thomas'},
    { id_book: 5, id_marc: '245', valor: 'El hastío hereje'},
    { id_book: 5, id_marc: '250', valor: 'Pearson'},
    { id_book: 5, id_marc: '260', valor: '2015'},
    { id_book: 5, id_marc: '300', valor: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'}
  ];

  constructor(marcService: MarcService ) {
    this.marcService = marcService;
  }

}
