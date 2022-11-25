import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedKittenItemComponent } from './adopted-kitten-item.component';

describe('AdoptedKittenItemComponent', () => {
  let component: AdoptedKittenItemComponent;
  let fixture: ComponentFixture<AdoptedKittenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedKittenItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedKittenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
