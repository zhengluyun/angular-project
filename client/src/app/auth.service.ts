import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _signupUrl = "http://localhost:3000/signup";
  private _signinUrl = "http://localhost:3000/signin";
  constructor(private http: HttpClient) { }

  signupUser(user: any){
    console.log("the step before sending post http request of signup");
    return this.http.post(this._signupUrl, user);
  }

  signinUser(user:any){
    console.log("the step before sending post http request of signin");
    return this.http.post(this._signinUrl, user);
  }

  checkLogin(){
    return !!localStorage.getItem("token")
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
