import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  constructor(private http: HttpClient) { }
  getSignup(payload) {
    return this.http.post(`http://localhost:8088/api/auth/signup`, payload);
  }
  getLogin(payload) {
    return this.http.post(`${environment.apiBaseURL}/signin`, payload);
  }
}
