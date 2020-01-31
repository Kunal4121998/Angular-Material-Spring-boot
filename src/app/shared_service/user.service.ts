import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {User} from '../user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
      
  private baseUrl='http://localhost:8080/api/';
  private headers=new HttpHeaders({'Content-Type':'application/json'});
 

  constructor(private http: HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'/users',{headers:this.headers});
  }
  
  getUser(id:number):Observable<object>{
    return this.http.get(this.baseUrl+'/user'+id,{headers:this.headers});
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'user/'+id,{headers:this.headers});
  }
  createUser(user:User):Observable<object>{
    return this.http.post(this.baseUrl+'/user',JSON.stringify(user),{headers:this.headers});
  }
  updateUser(user:User):Observable<object>{
    return this.http.put(this.baseUrl+'/user',JSON.stringify(user),{headers:this.headers});
  }
}
