import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/interfaces/auth-response';
import { CurrentUser } from 'src/app/interfaces/current-user';
import { RegisterRequest } from 'src/app/interfaces/register-request';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url: string = environment.apiUrl + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(
      map((response: AuthResponse) => {
        return response.user;
      })
    );
  }
}
