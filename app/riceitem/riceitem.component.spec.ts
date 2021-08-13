import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceitemComponent } from './riceitem.component';

describe('RiceitemComponent', () => {
  let component: RiceitemComponent;
  let fixture: ComponentFixture<RiceitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
