import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MySessionService} from '../session-storage.service';

@Component({
  selector: 'app-myfav',
  template: `
<h3>{{clickMessage}}</h3> 
<ul *ngIf="books"><p></p>
<li *ngFor="let book of books.favourites; index as i">
<h3>{{ book.title }}<button (click)="delFav(i,books.favourites)">Delete</button><button (click)="editFav(i,books.favourites)">Edit</button></h3>
<p>{{ book.description}} </p>
</li>
</ul>
  
  `
})
export class ContactComponent implements OnInit {
books:Object;
clickMessage = '';
  constructor(private data: DataService,  private session: MySessionService) { }
  // username:string, password:string, success:boolean
   
   ngOnInit() {
   
     if(this.session)
     {	
	  console.log(this.session.getItem("success"))
	  console.log(this.session.getItem("username"))
	  console.log(this.session.getItem("password"))
	// let a=this.session.getItem("username")
	// let b=this.session.getItem("password")
	 

	 
	this.data.login_getFav(`${this.session.getItem("username")}`,`${this.session.getItem("password")}`,2).subscribe(data=>{
	this.books = data;			
	console.log(this.books);
	 })
     } 
	 else // endif
	 {
		this.clickMessage = `Sorry! Need to login first! `;
		console.log("Need to login first")
	}
   }
  
	delFav(i:number,book:Object)
	{
		this.clickMessage = `Need to login first!  book with id: ${book[i].id} will be deleted!`;
		console.log("Need to login first")
	}

	editFav(i:number,book:Object)
	{
		this.clickMessage = `Need to login first!  book with id: ${book[i].id} will be edited!`;
		console.log("Need to login first")
	}
}
