import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAtributoComponent } from './d-atributo.component';

describe('DAtributoComponent', () => {
  let component: DAtributoComponent;
  let fixture: ComponentFixture<DAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
