import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , catchError,tap, throwError } from "rxjs";



@Injectable({
    providedIn:'root'
})
export class UsersService {
    private productUrl = 'https://randomuser.me/api/?results=250'
    constructor(private http: HttpClient) {}

    getUsers() : Observable <any>    { 
        return this.http.get(this.productUrl).pipe(
            tap(data => console.log('All', data)),
            catchError(this.handleError)
          );
           
        }

        private handleError (err: HttpErrorResponse) {
            let errMessage = ''
            if(err.error instanceof ErrorEvent) {
                errMessage= `An error occured : ${err.error.message}`
            }
            else {
                errMessage=`Server returned code : ${err.status},error message is : ${err.message}`
            }
            return throwError(()=>errMessage)
        }
 
   

}