import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegTrayComponent } from './peg-tray.component';

describe('PegTrayComponent', () => {
  let component: PegTrayComponent;
  let fixture: ComponentFixture<PegTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
