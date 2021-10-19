import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  getData(){
    let url:string = "https://portfolio-dotnet.herokuapp.com/api/v1/biodata/4";
    return this.http.get(url);
  }
}
