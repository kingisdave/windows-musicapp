import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

	public mus = new Audio();
  
  public music = [];
 
	displayPause = false;

  constructor() { }

  ngOnInit() {
  	this.music.push(

  		{name:"Ebenezer", title: "Edumare", length: "18:52", rating: 4, dir : "assets/music/Edumare.mp3"},
		  {name:"Xmas",  title: "Edumare", length: "10:12", rating: 3.5, dir: "assets/music/Christmas.mp3"},
		  {name:"Ebenezer", title: "Edumare", length: "24:02", rating: 4.5, dir : "assets/music/araNbada.mp3"},
		  {name:"Aramide", title: "No long thing", length: "18:00", rating: 3, dir : "assets/music/Go_on.mp3"},
		  {name:"Noone",  title: "Only you", length: "18:52", rating: 4, dir: "assets/music/Edumare.mp3"},
		  {name:"Donknow", title: "Not my own", length: "15:52", rating: 3, dir : "assets/music/araNbada.mp3"},
      {name:"Ebenezer", title: "Edumare", length: "20:50", rating: 4, dir : "assets/music/araNbada.mp3"},
      {name:"Aramide", title: "No long thing", length: "8:59", rating: 3, dir : "assets/music/Go_on.mp3"},
      {name:"Noone",  title: "Only you", length: "10:20", rating: 4, dir: "assets/music/Edumare.mp3"},
      {name:"Donknow", title: "Not my own", length: "5:50", rating: 4, dir : "assets/music/araNbada.mp3"}

)}

  playMusic(f){
  	this.mus.src=f.dir;
  	this.mus.play();
    // this.mus.controls = true;
  	this.displayPause = true;
  	document.getElementById('playa').style.display = "none";
  
  }

 onPlay() {
  	this.mus.play();
  	this.displayPause = true;
  	document.getElementById('playa').style.display = "none";
}
  onPause() {
  	this.mus.pause();
  	this.displayPause = false;
  	document.getElementById('playa').style.display = "inline";
  }

  onStop() {
    this.mus.load(); 
    this.displayPause = false;
    document.getElementById('playa').style.display = "inline";
  }

  onRefresh() {
  	this.mus.load();
    this.displayPause = false;
    document.getElementById('playa').style.display = "inline";
  }

  onRewind() {
    alert();
  }

  // onForward(autoplay) {
  //   this.music + 1;
  // }

}
