import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacanciesComponent } from './create-vacancies.component';

describe('CreateVacanciesComponent', () => {
  let component: CreateVacanciesComponent;
  let fixture: ComponentFixture<CreateVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVacanciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
