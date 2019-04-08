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
	let authorizationData = 'Basic '+  btoa('cycheng:123456');
	console.log(authorizationData);
	const urlFav = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/favourites';

	const httpOptions = new  HttpHeaders()
    .set('Accept','application/json') 
	.set('Content-type', 'text/plain')
	.set('Authorization',authorizationData)
	.set('Access-Control-Allow-Origin','*')
	.set('Access-Control-Allow-Credentials', 'true')
	//.set('Access-Control-Request-Method', 'GET')
      // .set('Access-Control-Request-Headers', 'Content-Type, Authorization')
/*
 const httpOptions = {
	 headers:new HttpHeaders({
    'Content-Type':  'text/plain',
    'Authorization':authorizationDat a,
	
  })
 };
 
 */
    console.log(JSON.stringify(httpOptions))

    return this.http.get(urlFav,{headers:httpOptions});
	
	}

 
getBooks(word:string) {
	
return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
 }
 

}
