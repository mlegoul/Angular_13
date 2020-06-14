import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {SnackBarService} from '../services/snack-bar.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private snackBarService: SnackBarService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          switch (err.status) {
            case 401:
              this.snackBarService.noValidLogin();
              return throwError(err)

            default:
              console.log('test');
              break;
          }
        })
      );
  }
}
