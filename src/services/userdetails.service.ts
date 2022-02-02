import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }
  getSignup(payload) {
    return this.http.post(`${environment.api}/auth/signin`, payload);
  }
  login(payload): Observable<any> {
    return this.http.post(`${environment.api}/auth/signin`, payload).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }
  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

}
}
