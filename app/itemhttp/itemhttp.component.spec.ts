import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemhttpComponent } from './itemhttp.component';

describe('ItemhttpComponent', () => {
  let component: ItemhttpComponent;
  let fixture: ComponentFixture<ItemhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemhttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
