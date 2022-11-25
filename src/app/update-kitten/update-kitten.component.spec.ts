import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKittenComponent } from './update-kitten.component';

describe('UpdateKittenComponent', () => {
  let component: UpdateKittenComponent;
  let fixture: ComponentFixture<UpdateKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
