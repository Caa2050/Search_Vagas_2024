import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form-recrutadores',
  templateUrl: './signup-form-recrutadores.component.html',
  styleUrls: ['./signup-form-recrutadores.component.css']
})
export class SignupFormRecrutadoresComponent implements OnInit{
    recruiterForm!:FormGroup;

    ngOnInit(): void {
      
    }

    submit():void{
      
    }
}
