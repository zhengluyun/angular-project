import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUserData = {
    email: "",
    password: ""
  };
  constructor(private _auth: AuthService) { }
  ngOnInit(): void {
  }
  signupUser(){
    console.log(this.signupUserData)
    this._auth.signupUser(this.signupUserData)
     .subscribe(
       res => console.log(res),
       err => console.log(err)
     )
  }

}
