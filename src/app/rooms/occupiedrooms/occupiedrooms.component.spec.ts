import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupiedroomsComponent } from './occupiedrooms.component';

describe('OccupiedroomsComponent', () => {
  let component: OccupiedroomsComponent;
  let fixture: ComponentFixture<OccupiedroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupiedroomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OccupiedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
