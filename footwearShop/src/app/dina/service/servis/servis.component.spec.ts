import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisComponent } from './servis.component';

describe('ServisComponent', () => {
  let component: ServisComponent;
  let fixture: ComponentFixture<ServisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
