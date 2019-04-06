import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
clickMessage = '';
books:Object;
 values = 'web api';
  onKey(value: string) {
    this.values += value + ' | ';
	
  }
  
constructor(private data: DataService) { }

  ngOnInit() {
/*	
  this.data.getBooks(`${this.values}`).subscribe(data=>{
  
  this.books = data;			
  console.log(this.books)
})
}

addFav(i:number,book:Object)
{
this.clickMessage = `Need to login first!  book with title: ${book[i].title} is pressed!`;
console.log("Need to login first")
}
*/

}
}

