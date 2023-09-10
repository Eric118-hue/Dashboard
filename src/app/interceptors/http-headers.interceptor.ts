import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers: { [name: string]: string | string[] } = {};
    const token = this.tokenService.getToken();
    if (token) {
      // TODO check if renewal needed
      headers['Authorization'] = `Bearer ${token}`;
    }
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}
