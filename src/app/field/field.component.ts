import { Component, OnInit } from '@angular/core';

import { MarcService } from '../marc.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  marcService: MarcService;  
  availableMarc = [];
  selectedMarc = { id_marc: '', 
                    nombre: '', 
                    descripcion: ''
                  };

  constructor( marcService: MarcService ) { 
    this.marcService = marcService;
    this.availableMarc = marcService.availableMarc;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.marcService.submitMarc(submittedForm.value.id_marc,
                                submittedForm.value.nombre, 
                                submittedForm.value.descripcion);
  }

}
