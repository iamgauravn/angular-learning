import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponentComponent } from './output-component.component';

describe('OutputComponentComponent', () => {
  let component: OutputComponentComponent;
  let fixture: ComponentFixture<OutputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
