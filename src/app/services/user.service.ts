import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/userlogins.json");
  }
  login(user: any): Observable<any> {
    return this.getJSON().pipe(map((data => {
      const item = data.find((item: any) => item.username == user.username);
      if (item) {
        if (item.password === user.password) {
          return {
            user: item,
            success: true
          }
        } else {
          return {
            success: false,
            message: 'Password missmatch'
          }
        }
      } else {
        return {
          success: false,
          message: 'Not a registered user'
        }
      }
    })));
  }
  getUsers(): Observable<boolean> {

    return this.http.get('https://randomuser.me/api/0.8/?results=20').pipe(map((data: any) => {
      const rsrs = data.results;
      localStorage.setItem('users', JSON.stringify(rsrs));
      return rsrs;
    }));
  }
  getFullList(): any[] {
    const list: any = localStorage.getItem('users');
    return JSON.parse(list);
  }
  submitUser(form: any) {
    const list: any = localStorage.getItem('users');
    const newlist =  JSON.parse(list);
    newlist.unshift({user:form});
    localStorage.setItem('users', JSON.stringify(newlist));
  }

}

