import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

	songs = [
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		{"album": "Obey", "title": "Obey", "length": "3mins", "rating": 5 },
		
	]

  constructor() { }

  ngOnInit() {
  }

}
