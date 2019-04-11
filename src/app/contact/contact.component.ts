import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MySessionService} from '../session-storage.service';

@Component({
  selector: 'app-myfav',
  template: `
<p>{{clickMessage}}</p> 
<ul *ngIf="books"><p></p>
<li *ngFor="let book of books.favourites; index as i">
<h3>{{ book.title }}  <button (click)="delFavHandler(i,books.favourites)">  Delete</button><button (click)="editFavHandler(i,books.favourites)">Edit Review</button></h3>
<p>{{ book.description}} </p>
<p><<textarea rows="2" cols="50">Enter your review here</textarea> </p>
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
   
     if(this.session&&this.session.getItem("username")!=null)
     {	
	  console.log(this.session.getItem("success"))
	  console.log(this.session.getItem("username"))
	  console.log(this.session.getItem("password"))
	  console.log('i in contact')
	 let a=this.session.getItem("username")
	 let b=this.session.getItem("password")
	  console.log('a '+ a+' '+b)
	 
	  this.data.login_getFav(`${a}`,`${b}`,2).subscribe(data=>{
	  
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
  
	delFavHandler(i:number,book:Object,choice:number)
	{if(this.session.getItem("username")!=null)
	{ 
     let a=this.session.getItem("username")
	 let b=this.session.getItem("password")
	 let id =i
	 let bookfav=book
	 //console.log('a '+a)
	 //console.log('b '+b)
	 //console.log(id)
	 //console.log(bookfav)
	 this.data.addFav(`${a}`,`${b}`, id, bookfav,3).subscribe(data=>{
     //this.books = JSON.stringify(data);	//error mapping as object return not array
      
     this.clickMessage =` Book with title: ${book[i].title} is deleted!`
	 console.log('OK-book deleted')
	 this.ngOnInit()
	})}
    else {
     this.clickMessage = `Need to login first!  Book with title: ${book[i].title} is pressed!`;
     console.log("Need to login first")
	 this.ngOnInit()
	}
   }
	editFavHandler(i:number,book:Object)
	{
		this.clickMessage = `Sorry this function not implemented yet!  Book with title: ${book[i].title} will be edited!`;
		console.log("Need to login first")
		this.ngOnInit()
	}

}
