import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import it up here
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

getBooks(word:string) {
	
return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
 }
 
getFav() {
	//let authorizationData = 'Basic ' + btoa('cycheng:123456');
	 //console.log(authorizationData);
	/*const headerOptions = {
    headers: new HttpHeaders({
        'Content-Type':  "application/json",
        'Authorization': "Basic Y3ljaGVuZzoxMjM0NTY="
	})
	}*/
return this.http.get(`https://cycbookshop.herokuapp.com/favourites`,{ headers: new HttpHeaders({
        'Content-Type':  "application/json",
        'Authorization': "Basic Y3ljaGVuZzoxMjM0NTY=",
	
	})
	})
 }
}



