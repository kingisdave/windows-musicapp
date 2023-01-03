import { Component } from '@angular/core';
// import { UserService } from './../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'musicapp';
  // changedData = "Nothing dey here";
   constructor(private service: UserService) {
  	// this.service.datasMessage$.subscribe(data=>{
  	// 	// this.changedData=data;
  	// })
   }

  ngOnInit() {
  }
  // setData() {
  // 	let message = "I am on Page 1, and I have changed the data";
  // 	this.service.setData(message);

  // }

}
