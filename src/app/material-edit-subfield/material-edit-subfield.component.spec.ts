import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditSubfieldComponent } from './material-edit-subfield.component';

describe('MaterialEditSubfieldComponent', () => {
  let component: MaterialEditSubfieldComponent;
  let fixture: ComponentFixture<MaterialEditSubfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialEditSubfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEditSubfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
