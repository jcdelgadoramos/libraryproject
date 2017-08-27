import { Injectable } from '@angular/core';

@Injectable()
export class MarcService {

  availableMarc = [
    { id_marc: '007', 
      nombre: 'Monto', 
      descripcion: 'Cantidad de unidades disponibles del libro.'
    },
    { id_marc: '041',
      nombre: 'Código de Idioma',
      descripcion: 'Código de identificación del idioma del libro.'
    },
    { id_marc: '082',
      nombre: 'Clasificación Dewey',
      descripcion: 'Estándar Dewey para codificación/clasificación por autor.'
    },
    { id_marc: '100',
      nombre: 'Entrada por autor personal',
      descripcion: 'Autor o coautor del libro.'
    },
    { id_marc: '245',
      nombre: 'Tìtulo',
      descripcion: 'Tìtulo del libro.'
    },
    { id_marc: '250',
      nombre: 'Mención de edición',
      descripcion: 'Información sobre la edición.'
    },
    { id_marc: '260',
      nombre: 'Pie de imprenta',
      descripcion: 'Información editorial: lugar de publicación, editorial, año.'
    },
    { id_marc: '300',
      nombre: 'Descripción física',
      descripcion: 'Descripción física del ejemplar. Se emplea para almacenar la portada.'
    },
    { id_marc: '440',
      nombre: 'Serie',
      descripcion: 'Información de serie: serie título, número de serie, volumen.'
    },
    { id_marc: '520',
      nombre: 'Nota de resumen',
      descripcion: 'Resumen del ejemplar.'
    }
  ];

  constructor() { } 

  mapMarc(id_marc) {
    return this.availableMarc.find((marc) => {
      return marc.id_marc === id_marc;
    }); 
  }

  submitMarc(id_marc, nombre, descripcion) {
    const pos = this.availableMarc.findIndex((marc) => {
      return marc.id_marc == id_marc;
    })
    if (pos !== -1) {
      this.availableMarc[pos].nombre = nombre;
      this.availableMarc[pos].descripcion = descripcion;
    } else {
      const newMarc = { id_marc: id_marc, nombre: nombre, descripcion:descripcion };
      this.availableMarc.push(newMarc);
    }
  }

}
