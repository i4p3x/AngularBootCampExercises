import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {

  hworld: String =  "Hello World";
  hworld1: String =  "Hello World1";

  onAlert(){
    alert("I was triggered by an event!");
  }
  
}
