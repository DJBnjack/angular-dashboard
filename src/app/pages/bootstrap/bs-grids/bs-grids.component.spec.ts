import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsGridsComponent } from './bs-grids.component';

describe('BsGridsComponent', () => {
  let component: BsGridsComponent;
  let fixture: ComponentFixture<BsGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
