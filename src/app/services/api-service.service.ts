import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class ApiServiceService {

  constructor(private _http:HttpClient) {

   }
   getApi!:"https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile";
   getByIdApi!:"https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile";
   postApi!:"https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile";
   putApi!:"https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile";
   deleteApi!:"https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile";
   getMethod():Observable<any>{
    return this._http.get<any>(`${this.getApi}`);
   }
   getByIdMethod(user_id:number){
    return this._http.get<any>(`${this.getApi}/${user_id}`);
   }
   postMethod(contact_details:any){
    return this._http.post<any>(`${this.getApi}`,contact_details);
   }
   putMethod(contact_details:any,user_id:number){
    return this._http.put<any>(`${this.getApi}/${user_id}`,contact_details);
   }
   deleteMethod(user_id:number){
    return this._http.get<any>(`${this.getApi}/${user_id}`);
   }
}
