import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { empty, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserresolveService implements Resolve<any> {
  constructor(private service: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const users:any =localStorage.getItem('users');
    if (!users) {
    return this.service.getUsers().pipe(
      catchError((error) => {
      return empty();
      }));
    }
    return of(true);
  }
}
