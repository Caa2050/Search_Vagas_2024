import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
     
  constructor (private route: ActivatedRoute){
     
  }
  //the text variable receives the value that comes through the route link
  text = String(this.route.snapshot.paramMap.get("text"))
}
