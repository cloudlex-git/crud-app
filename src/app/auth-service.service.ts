import { baseUrl } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
import { Observable } from 'rxjs-compat/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/users/login',data);
  }
}
