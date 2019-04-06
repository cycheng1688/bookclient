import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import it up here
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getBooks(word:string) {
	
return this.http.get(`http://cycbookshop.herokuapp.com/booksearch?q=${word}`)
}
}

