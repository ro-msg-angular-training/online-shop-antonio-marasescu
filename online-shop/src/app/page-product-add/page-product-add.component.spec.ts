import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductAddComponent } from './page-product-add.component';

describe('PageProductAddComponent', () => {
  let component: PageProductAddComponent;
  let fixture: ComponentFixture<PageProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
