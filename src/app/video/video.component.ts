import { Component, OnInit } from '@angular/core';
// import { UserService } from './../services/user.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private service: UserService) {
   }

  ngOnInit() {
  }
  // setData() {
  // 	let message = "I am on Page 1, and I have changed the data";
  // 	this.service.setData(message);
  // }
}
