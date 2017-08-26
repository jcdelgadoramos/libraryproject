import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeFieldComponent } from './material-type-field.component';

describe('MaterialTypeFieldComponent', () => {
  let component: MaterialTypeFieldComponent;
  let fixture: ComponentFixture<MaterialTypeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
