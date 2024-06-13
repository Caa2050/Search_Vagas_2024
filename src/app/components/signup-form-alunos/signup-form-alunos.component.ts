import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form-alunos',
  templateUrl: './signup-form-alunos.component.html',
  styleUrls: ['./signup-form-alunos.component.css']
})
export class SignupFormAlunosComponent implements OnInit{
   students!:FormGroup;

    ngOnInit(): void {
      
    }

    submit():void{
      
    }

}
