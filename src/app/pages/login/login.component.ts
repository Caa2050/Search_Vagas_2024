import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user : Boolean
  constructor (private route: ActivatedRoute){
      // the text variable is receiving a value that comes through the route link
      const text = String(route.snapshot.paramMap.get("text"))
      //the variable user receives a boolean value from the 'isUser' function
       this.user  = this.isUser(text)
  }
 //This function will return a boolean value if the text variable is equal 'Alunos'
 //or 'Recrutadores'
 isUser(text : any) :Boolean {
      
     console.log(text)
     let value : Boolean 
     if(text == "Aluno"){
        value = true
      }
      else {
        value = false
      }
      return value
     }
     
     
  

}
