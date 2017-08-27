import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  items = [
    { titulo: 'The haunting happening', autor: 'Kenneth Cunningham', numero_ejemplares: 3 },
    { titulo: 'Lovely Lovelace', autor: 'Leopolda Coimbra', numero_ejemplares: 5 },
    { titulo: 'La Biblia Morada', autor: 'Ginger Gainsburg', numero_ejemplares: 1 },
    { titulo: 'Apuntes sobre la desgracia del pueblo', autor: 'Leopolda Coimbra', numero_ejemplares: 2 },
    { titulo: 'El toro', autor: 'Parker Graham', numero_ejemplares: 53 }
  ]; 

  constructor() { }

  ngOnInit() {
  }
  
  getMaterials() {
    return this.items.slice();
  }

}
