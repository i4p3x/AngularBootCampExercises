import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalizeDirective} from '../../Directives/capitalize-directive.directive'

@Component({
  selector: 'app-d-custom',
  standalone: true,
  imports: [CommonModule, CapitalizeDirective],
  templateUrl: './d-custom.component.html',
  styleUrl: './d-custom.component.scss'
})
export class DCustomComponent {
 
}
