import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor{
  constructor(private _authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("intercept function starts to work")
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
