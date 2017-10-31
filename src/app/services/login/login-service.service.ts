import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginServiceService {

  constructor(private http: Http) { }

   // login(username: string, password: string) {
   	login() {

   		console.log("Web service call");

   	return this.http.post('http://fsapi.sarvaya.com/api/auth/login',  { "username": "asharma", "password": "abcd" })
        .map((response: Response) => {
            // login successful if there's a id_token in the response
            console.log("Success!!", response.json());
            let user = response.json();
            if (user && user.id_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
   }

   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
