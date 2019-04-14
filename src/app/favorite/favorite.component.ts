import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MySessionService} from '../session-storage.service';

@Component({
  selector: 'app-myfav',
  template: `
 
<ul *ngIf="books"><p></p>
<li *ngFor="let book of books.favourites; index as i">
<h3>{{ book.title }}  <button (click)="delFavHandler(i,books.favourites)">  Delete</button><button (click)="editFavHandler(i,books.favourites)">Edit Review</button></h3>
<p>{{ book.description}} </p>
<p><<textarea rows="2" cols="50">Enter your review here</textarea> </p>
</li>
</ul>
  
  `
})

    
	
	
	
	
export class FavoriteComponent implements OnInit {
books:Object;

clickMessage = '';
  constructor(private data: DataService,  private session: MySessionService) { }
 
   
   ngOnInit() {
   
     if(this.session&&this.session.getItem("username")!=undefined)
     {	
	  console.log(this.session.getItem("success"))
	  console.log(this.session.getItem("username"))
	  console.log(this.session.getItem("password"))
	  
	 let a=this.session.getItem("username")
	 let b=this.session.getItem("password")
	  
	 
	  this.data.login_getFav(`${a}`,`${b}`,2).subscribe(data=>{
	  
	  this.books = data;
	  console.log(this.books);
	 })
     } 
	 else // endif
	 {
		this.clickMessage = `Sorry! Need to login first! `;
		window.alert( this.clickMessage)
	}
   }
  
	delFavHandler(i:number,book:Object,choice:number)
	{if(this.session.getItem("username")!=undefined)
	{ 
     let a=this.session.getItem("username")
	 let b=this.session.getItem("password")
	 let id =i
	 let bookfav=book
	
	 this.data.addFav(`${a}`,`${b}`, id, bookfav,3).subscribe(data=>{
     //this.books = JSON.stringify(data);	//error mapping as object return not array
      
     this.clickMessage =` Book with title: ${book[i].title} is deleted!`
	 window.alert( this.clickMessage)
	 this.ngOnInit()
	})}
    else {
     this.clickMessage = `Need to login first!  Book with title: ${book[i].title} is pressed!`;
     window.alert( this.clickMessage)
	 this.ngOnInit()
	}
   }
	editFavHandler(i:number,book:Object)
	{
		this.clickMessage = `Sorry this function not implemented yet!  Book with title: ${book[i].title} will be edited!`;
		window.alert( this.clickMessage)
		this.ngOnInit()
	}

}
