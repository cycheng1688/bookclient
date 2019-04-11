import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { DataService } from '../data.service'; 
import { MySessionService} from '../session-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
   
  
  })
export class AboutComponent implements OnInit {

  message:object;
  messageForm: FormGroup;   submitted = false;   success = false; 
 
  constructor(private formBuilder: FormBuilder,private data: DataService, private session: MySessionService) { } 

	ngOnInit() { this.messageForm = this.formBuilder.group({ 
              name: ['', Validators.required],       
			  password: ['', Validators.required]  });
	
} 
 
 onSubmit() {     this.submitted = true; 
 
    if (this.messageForm.invalid) { return;} 
       this.data.login_getFav(this.messageForm.controls.name.value,this.messageForm.controls.password.value, 1)
	   .subscribe(data=>{
           this.message = data;			
       console.log(this.message)
       this.success = true;
	   this.session.setItem("success", `${this.success}`);
	   this.session.setItem("username", `${this.messageForm.controls.name.value}`);
	   this.session.setItem("password", `${this.messageForm.controls.password.value}`);
	 
	  console.log(this.session.getItem("success"))
	  console.log(this.session.getItem("username"))
	  console.log(this.session.getItem("password"))
	   
	})
  }
}
