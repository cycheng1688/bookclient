import { Component, OnInit } from '@angular/core';
import { MySessionService} from '../session-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
appTitle = 'Bookshop';

  constructor(private session: MySessionService) { }

  ngOnInit() {
  
  
  }

}
