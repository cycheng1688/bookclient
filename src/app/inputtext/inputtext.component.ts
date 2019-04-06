import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-inputtext',
  template: `
    <input #newSearch
      (keyup.enter)="addSearch(newSearch.value)"
      (blur)="addSearch(newSearch.value); newSearch.value='' ">

    <button (click)="addSearch(newSearch.value)">Search</button><p>{{clickMessage}}</p>
<ul *ngIf="books">
<li *ngFor="let book of books; index as i">
<h3>{{ book.title }} <button (click)="addFav(i, books)">Add to Favourites</button></h3>
<p>{{ book.description}} </p>
</li>
</ul>
  
  `
})
export class InputtextComponent {

clickMessage = '';
books:Object;
  constructor(private data: DataService) { }

 addSearch(newSearch:string){
	
  this.data.getBooks(`${newSearch}`).subscribe(data=>{
  
  this.books = data;			
  console.log(this.books)
})
}
addFav(i:number,book:Object)
{
this.clickMessage = `Need to login first!  book with title: ${book[i].title} is pressed!`;
console.log("Need to login first")
}
}

