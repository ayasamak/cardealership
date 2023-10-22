import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.log("Error Event");
            } else {
              switch (error.status) {
                case 401:
                  //login
                  break;
                case 403:
                  //unauth
                  break;
                case 500:
                  Swal.fire('error', 'interbal Server Eroor', 'error')
                  break;
                case 0:
                case 400:
                case 405:
                case 406:
                case 409:
                  this.handleAuthError(error);
                  break;
              }
            }
          } else {
            console.error("something else happened");
          }

          return throwError(error);
        })
      )
  }
  public handleAuthError(error: any) {
    let msg = "";
    if (error !== undefined && typeof error === "string") {
      msg = error;
    } else if (error.error !== undefined && typeof error.error === "string") {
      msg = error.error;
    } else if (
      error.error.error !== undefined &&
      typeof error.error.error === "string"
    ) {
      msg = error.error.error;
    } else {
      msg = error.error.error.errors
        ? error.error.error.errors[0].errorMessage
        : "Something went wrong";
    }
    Swal.fire('error', msg, 'error')
  }
}



