import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

	public myStyles = {
		background : "dark",
		width: "400px",
		border: "1px solid",
		borderRadius: "45%"

	};
	// public mus = new Audio();
	// i = 0;
	// public music = [ {'assets/music/Edumare.mp3', 'assets/music/Christmas.mp3', 'assets/music/araNbada.mp3'];

	// this.mus = this.music[i];
	// this.mus.addEventListener('ended', function() {
	// 	i = ++i < music.length ? i : 0;
	// 	this.mus.src = music[i];
	// 	this.mus.play();
	// }, true );
	// this.mus.volume= 0.3;
	// this.mus.src = music[0];

	// public mus = [
	// 	{name:"Ebenezer", dir : "assets/music/Edumare.mp3"},
	// 	{name:"Ebenezer",  dir: "assets/music/Christmas.mp3"},
	// 	{name:"Ebenezer", dir : "assets/music/busysinging.mp3"}
	// ];


  constructor() { }

  ngOnInit() {
  }
 

  // onPlay() {
  // 	this.mus.play();
  // 	document.getElementById('pla').style.display = "none";



  // 	document.getElementById('pau').style.display = "inline";

  // }
  // onPause() {
  // 	this.mus.pause();
  // 	document.getElementById('pau').style.display = "none";
  // 	document.getElementById('pla').style.display = "inline";

  // }
  // onForward() {
  // 	this.mus.next([autoplay]);
  // }
  // onRewind() {
  // 	this.mus.prev([autoplay]);
  // }

}
