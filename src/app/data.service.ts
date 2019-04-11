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

 
  login_getFav(username:string,password:string, choice:number) //1:login 2:get Fav
  {
    
     const urlLogin = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/login';
	 const urlFav = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/favourites';
	
	let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
	  //  console.log(`${username}:${password}`+' '+choice);
	  //  console.log(authorizationData);
	

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
	
	
	return this.http.get(urlc,{headers:httpOptions}); //login or get list of Fav
	
	} // end login_getFav

addFav(username:string, password:string,i:number,book:Object,choice:number) //1:add Fav, 2:edit 3:del
{   
      var Fav = 'https://cors-anywhere.herokuapp.com/https://cycbookshop.herokuapp.com/favourites';
	 let authorizationData = 'Basic '+  btoa(`${username}:${password}`);
	   console.log(`${username}:${password}`+' '+choice);
	   console.log(authorizationData);
	

	const httpOptions = new  HttpHeaders()
    .set('Accept','application/json') 
	.set('Content-type', 'application/json')
	.set('Authorization',`${authorizationData}`)
	.set('Access-Control-Allow-Origin','*')
	.set('Access-Control-Allow-Credentials', 'true')
	.set('X-Requested-With', 'HttpRequest')
	
	if (choice==1) //add Fav
	{   
	   console.log('index '+i)
	   console.log('book '+book)
	   console.log(`book with id: ${book[i].id} is pressed!`)
	   console.log(`book with title: ${book[i].title} is pressed!`)
	   

	   return this.http.post(Fav,{'id': `${book[i].id}`,            
			   'title':`${book[i].title}`,
			   'authors':`${book[i].authors}`,
			   'description':`${book[i].description}`
	         },{headers:httpOptions})
	 
	}
	
	if (choice==2) //edit Fav
	   return this.http.put(Fav,{headers:httpOptions})
	
	if (choice==3) //del Fav
	  {Fav=Fav +`/${book[i].id}`
	   return this.http.delete(Fav,{headers:httpOptions})}
     
  }// end addFav

 getBooks(word:string) {
	return this.http.get(`https://cycbookshop.herokuapp.com/booksearch?q=${word}`)
  }//end getBooks
 
 } // End DataService