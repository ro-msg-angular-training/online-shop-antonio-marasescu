import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductEditComponent } from './page-product-edit.component';

describe('PageProductEditComponent', () => {
  let component: PageProductEditComponent;
  let fixture: ComponentFixture<PageProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
