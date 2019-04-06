import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myfav',
  template: `
   
<ul *ngIf="books">
<li *ngFor="let book of books; ">
<h3>{{ book.title }}</h3>
<p>{{ book.description}} </p>
</li>
</ul>
  
  `
})
export class ContactComponent implements OnInit {
books:Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.getFav().subscribe(data=>{
  this.books = data;			
  console.log(this.books)
})
  }

}
