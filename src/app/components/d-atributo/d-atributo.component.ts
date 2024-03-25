import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-d-atributo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-atributo.component.html',
  styleUrl: './d-atributo.component.scss'
})


export class DAtributoComponent {
active: any = false;   
  
cambiarFlag(){
  this.active = !this.active;
}
}
