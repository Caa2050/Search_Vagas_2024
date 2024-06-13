import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormRecrutadoresComponent } from './signup-form-recrutadores.component';

describe('SignupFormRecrutadoresComponent', () => {
  let component: SignupFormRecrutadoresComponent;
  let fixture: ComponentFixture<SignupFormRecrutadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormRecrutadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormRecrutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
