import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
getUrl="api/fetch.php";
datas=new Subject<any>();
datasMessage$=this.datas.asObservable();

setData(value){
	this.datas.next(value);
}
  constructor(private http:HttpClient) { }

  getUsers() {
  	return this.http.get<any>(this.getUrl);
  }
}
