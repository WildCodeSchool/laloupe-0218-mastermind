import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessesComponent } from './guesses.component';

describe('GuessesComponent', () => {
  let component: GuessesComponent;
  let fixture: ComponentFixture<GuessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
