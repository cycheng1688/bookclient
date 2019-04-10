import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';
const STORAGE_KEY = 'any';

	@Injectable({
  providedIn: 'root'
})

export class MySessionService {

  constructor(@Inject(SESSION_STORAGE)private session: StorageService) { }

  
  		
			public sessiondata:any =[]
 
			setItem(key, val): void {
              console.log('recieved= key:' + key + 'value:' + val);
				this.session.set(key, val);
				this.sessiondata[key]= this.session.get(key);
			}
 
			 getItem(key): void {
				this.sessiondata[key]= this.session.get(key);
				console.log('recieved= key:' + key + ' value:' + this.session.get(key));
				console.log('OK')
				
			}
			
 
			clear(): void {
				this.session.clear();
				}
			  
			  
  
  
  
  
  
  
  }// SessionStorageService
