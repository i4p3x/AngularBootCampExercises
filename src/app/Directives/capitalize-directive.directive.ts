import {  Directive, ElementRef   } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})

export class CapitalizeDirective {
  constructor(private eleRef: ElementRef) {
    //eleRef.nativeElement.style.background = 'red'; 
    eleRef.nativeElement.textContent = eleRef.nativeElement.textContent.toUpperCase( ) ;
    
  }

}


