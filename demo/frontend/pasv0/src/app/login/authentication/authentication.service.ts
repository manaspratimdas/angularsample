import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from '../user/user';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

     private currentUserSubject: BehaviorSubject<User>;
      public currentUser: Observable<User>;

      

  constructor(
      private http: HttpClient
  ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }


    public get currentUserValue(): User {
        console.log('in authentication service- currentuser method' + JSON.stringify(this.currentUserSubject.value));
        return this.currentUserSubject.value;
    }

   login(username: string, password: string) {
        console.log('in authentication service- pas login method');
        const login = { username: username, password: password };
           return  this.http.post<any>('http://localhost:8080/login', login)
      .pipe(map( user => {
          if (user && user.token){
              console.log('user is.......' + user.token);
              console.log('--->' + JSON.stringify(user));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log('logged in user after login: ' + JSON.stringify(user));
                    this.currentUserSubject.next(user);
          }
          return user;
      }))  ;


    }

    logout(){
         localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

   
}