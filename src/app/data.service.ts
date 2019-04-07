import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import it up here
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

getFav() {
	
	let authorizationData =  btoa('cycheng:123456');
	console.log(authorizationData);
	const urlFav = 'https://cycbookshop.herokuapp.com/favourites';
	//const headersOption:HttpHeaders = new HttpHeaders({'Accept': 'application/json',
	//'Authorization':'Basic ' + `${authorizationData}`,'Access-Control-Allow-Origin': '*',
	//'Access-Control-Allow-Credentials': true
	//});
	//headersOption.append('Accept': 'application/json');
	//headersOption.append('Authorization':'Basic ' + `${authorizationData}`);
	//headersOption.append('Access-Control-Allow-Origin': '*')
    //headersOption.append('Access-Control-Allow-Credentials': true)
    return this.http.get(urlFav,{headers:new HttpHeaders({
	//'Accept': 'application/json',
	'Authorization':'Basic ' + `${authorizationData}`,
	//'Access-Control-Allow-Origin': '*',
	//'Access-Control-Allow-Credentials': true
	  })
	})
 }
 
getBooks(word:string) {
	
return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
 }
 

}
