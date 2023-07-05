import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:any;
  constructor(private httpClient: HttpClient, private commonService : CommonService) { }
  
  getHeader(app:string="admin"){
    return this.headers = this.commonService.getAuthHeader(app);
  }

  /* Authentication API Start */
  login(postData:any){
    console.log(postData);
    return this.httpClient.post<any>(`${environment.apiURL}/auth/login`, postData);
  }

  // register(postData:any){
  //   return this.httpClient.post<any>(`${environment.apiURL}/auth/register`, postData);
  // }

  // passwordRequest(email:string){
  //   return this.httpClient.get<any>(`${environment.apiURL}/auth/forgotPassword/${email}`);
  // }

  // checkPasswordToken(token:string){
  //   return this.httpClient.get<any>(`${environment.apiURL}/auth/password/token/${token}`);
  // }

  // resetPassword(postData:any){
  //   return this.httpClient.post<any>(`${environment.apiURL}/auth/resetPassword`, postData);
  // }
  /* Authentication API END */
}