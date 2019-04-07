import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; // Import it up here
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class DataService {




  constructor(private http: HttpClient) { }

getFav() {
	
	const urlFav = 'https://cycbookshop.herokuapp.com/favourites';
/*	
	const headersOpt = new  HttpHeaders()
    .set('Accept','application/json') 
	.set('Authorization',`${authorizationData}`)
	
	
	*/
let authorizationData = 'Basic '+  btoa('cycheng:123456');
	console.log(authorizationData);
 const httpOptions = {
	 headers:new HttpHeaders({
    'Content-Type':  'text/plain',
    'Authorization':authorizationData
  })
 };
console.log(JSON.stringify(httpOptions))

    return this.http.get(urlFav,httpOptions);
	
	}

 
getBooks(word:string) {
	
return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
 }
 

}
