import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFullComponent } from './material-full.component';

describe('MaterialFullComponent', () => {
  let component: MaterialFullComponent;
  let fixture: ComponentFixture<MaterialFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
