import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-d-estruc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-estruc.component.html',
  styleUrl: './d-estruc.component.scss'
})
export class DEstrucComponent {
   
   lista:string[]=["A","B","C","D"];
  
}
