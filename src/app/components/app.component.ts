import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {DAtributoComponent } from "./d-atributo/d-atributo.component";
import {DEstrucComponent} from "./d-estruc/d-estruc.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule,MatListModule,MatDividerModule, DAtributoComponent, DEstrucComponent]
})
export class AppComponent {
  title = 'AngularBootCamp Exercises';

}
