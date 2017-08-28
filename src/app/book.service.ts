import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  availableBooks = [
    { id_book: 1, 
      numero_ejemplares: 3, 
      autor: 'Alice Humprey', 
      titulo: 'Horror en la villa',
      editorial: 'Alfaguara',
      fecha_publicacion: 1998,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 2, 
      numero_ejemplares: 7, 
      autor: 'Sir Edwin Braniff', 
      titulo: 'Lucha de hormigueros',
      editorial: 'Mitosis',
      fecha_publicacion: 2008,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 3, 
      numero_ejemplares: 5, 
      autor: 'Eliana Torrelodones', 
      titulo: 'La cruz helada',
      editorial: 'Literatura Mondadori',
      fecha_publicacion: 2011,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 4, 
      numero_ejemplares: 2, 
      autor: 'Juan Álvaro Caviezes-Príncipe', 
      titulo: 'Las guerras termodinámicas',
      editorial: 'Fondo Editorial UNASUFIL',
      fecha_publicacion: 1981,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 5, 
      numero_ejemplares: 11, 
      autor: 'Dempsey Thomas', 
      titulo: 'El hastío hereje',
      editorial: 'Pearson',
      fecha_publicacion: 2015,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    },
    { id_book: 6, 
      numero_ejemplares: 4, 
      autor: 'Nicolás Macchiavello', 
      titulo: 'El Príncipe',
      editorial: 'Planeta',
      fecha_publicacion: 1513,
      portada: 'https://i.pinimg.com/236x/12/5d/a6/125da6300cc7045e5210e5490b5b0f85--minimalist-book-book-cover-design.jpg'
    }
  ];

  existingAuthors = [];
  registeredYears = [];

  numberOfBooks;

  constructor() {
    this.numberOfBooks = this.availableBooks.length + 1;
    this.existingAuthors = this.availableBooks.map((book) => {
      return book.autor;
    }).sort();
    this.registeredYears = this.availableBooks.map((book) => {
      return book.fecha_publicacion;
    }).sort();
  }

  getBooks() {
    return this.availableBooks;
  }

  getYears() {
    return this.availableBooks.map((book) => {
      return book.fecha_publicacion;
    }).sort();
  }

  getAuthors() {
    return this.availableBooks.map((book) => {
      return book.autor;
    }).sort();
  }
  
  mapBook(id_book) {
    const pos = this.availableBooks.findIndex((book) => {
      return book.id_book == id_book;
    }); 
    if (pos !== -1) {
      return this.availableBooks[pos];
    } else {
      return {  id_book: id_book, 
                autor: '', 
                titulo: '',
                editorial: '',
                fecha_publicacion: 2000,
                numero_ejemplares: 0, 
                portada: ''
      }
    }
  }

  submitBook(id_book, autor, titulo, editorial,fecha_publicacion, numero_ejemplares, portada) {
    const pos = this.availableBooks.findIndex((book) => {
      return book.id_book == id_book;
    })
    if (pos !== -1) {
      this.availableBooks[pos].autor = autor;
      this.availableBooks[pos].titulo = titulo;
      this.availableBooks[pos].editorial = editorial;
      this.availableBooks[pos].fecha_publicacion = fecha_publicacion;
      this.availableBooks[pos].numero_ejemplares = numero_ejemplares;
      this.availableBooks[pos].portada = portada;
    } else {
      const newBook = { id_book: this.numberOfBooks++, 
                        autor: autor, 
                        titulo: titulo,
                        editorial: editorial,
                        fecha_publicacion: fecha_publicacion,
                        numero_ejemplares: numero_ejemplares,
                        portada: portada };
      this.availableBooks.push(newBook);
    }
  }

  filterBooks(filtro, busqueda) {
    if (busqueda == ''){
      return this.availableBooks;
    }
    if (filtro == 'autor') {
      return this.availableBooks.filter((book) => {
        return book.autor.indexOf(busqueda) != -1;
      })
    } else if (filtro == 'titulo') {
      return this.availableBooks.filter((book) => {
        return book.titulo.indexOf(busqueda) != -1;
      })
    } else {
      return this.availableBooks.filter((book) => {
        return book.titulo.indexOf(busqueda) != -1 || book.autor.indexOf(busqueda) != -1;
      })
    }
  }

  listBooksPerYear(year) {
    return this.availableBooks.filter((book) => {
      return book.fecha_publicacion == year;
    })
  }
  
  listBooksPerAuthor(autor) {
    return this.availableBooks.filter((book) => {
      return book.autor == autor;
    })
  }

  removeBook(id_book) {
    const pos = this.availableBooks.findIndex((book) => {
      return book.id_book == id_book;
    })
    if (pos == -1) {
    } else {
      console.log(pos);
      this.availableBooks.splice(pos,1);
    }
  }

}
