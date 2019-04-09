import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { DataService } from '../data.service'; 
@Component({
  selector: 'app-login',
 templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
//  template:`
//  <ul *ngIf="message">
 //  <h3>{{JSON.stringfiy(message)}}</h3>
//</ul>
  
 // `
})
export class AboutComponent implements OnInit {

  message:object;
  messageForm: FormGroup;   submitted = false;   success = false; 
 
  constructor(private formBuilder: FormBuilder,private data: DataService) { } 

 ngOnInit() { this.messageForm = this.formBuilder.group({ 
              name: ['', Validators.required],       
			  password: ['', Validators.required]  });} 
 
 onSubmit() {     this.submitted = true; 
 
    if (this.messageForm.invalid) { return;} 
       this.data.login_getFav(this.messageForm.controls.name.value,this.messageForm.controls.password.value, 1)
	   .subscribe(data=>{
          this.message = data;			
      //  console.log(this.message)
       this.success = true; 
	})
	}
}
