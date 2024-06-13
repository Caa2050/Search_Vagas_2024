import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormAlunosComponent } from './signup-form-alunos.component';

describe('SignupFormAlunosComponent', () => {
  let component: SignupFormAlunosComponent;
  let fixture: ComponentFixture<SignupFormAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
