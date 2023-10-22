import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialduplicatesComponent } from './potentialduplicates.component';

describe('PotentialduplicatesComponent', () => {
  let component: PotentialduplicatesComponent;
  let fixture: ComponentFixture<PotentialduplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialduplicatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotentialduplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
