import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinUserData = {
    email: "",
    password: ""
  }
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  signinUser(){
    console.log("the step after the sign in button was clicked");
    console.log(this.signinUserData);
    this._auth.signinUser(this.signinUserData)
      .subscribe(
        (res: any) => {
          console.log(res)
          localStorage.setItem('token',res['token'])
        },
        err => console.log(err)
      )
  }
}
