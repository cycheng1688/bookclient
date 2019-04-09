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

  
  logflag =false;
 
  login_getFav(username:string,password:string, choice:number) {
  const urlLogin = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/login';
  const urlFav = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/favourites';
  let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
	console.log(authorizationData);
	

	const httpOptions = new  HttpHeaders()
    .set('Accept','application/json') 
	.set('Content-type', 'text/plain')
	.set('Authorization',`${authorizationData}`)
	.set('Access-Control-Allow-Origin','*')
	.set('Access-Control-Allow-Credentials', 'true')
	
    console.log(JSON.stringify(httpOptions));
    let urlc='';
	   if(choice ==1)
	    urlc=urlLogin;
	   else	
	     urlc=urlFav;
    console.log(urlc,' ',choice)
	
	return this.http.get(urlc,{headers:httpOptions});
	
	}

getBooks(word:string) {
	return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
 }
 
}