import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) { }
  async login(user: any) {
    const result = await this.http.post<any>(`${this.apiURL}/auth/login`, user).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${this.apiURL}/users`, account).toPromise();
    return result;
  }

}
