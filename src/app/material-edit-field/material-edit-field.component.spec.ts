import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditFieldComponent } from './material-edit-field.component';

describe('MaterialEditFieldComponent', () => {
  let component: MaterialEditFieldComponent;
  let fixture: ComponentFixture<MaterialEditFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialEditFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEditFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
