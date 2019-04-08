import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myfav',
  template: `
   
<ul *ngIf="books"><p>{{clickMessage}}</p>
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
  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.getFav().subscribe(data=>{
  this.books = data;			
  console.log(this.books)
 
  })
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
