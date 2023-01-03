import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { NullpageComponent } from './nullpage/nullpage.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { PlayerComponent } from './player/player.component';
import { MusicComponent } from './music/music.component';
import { VideoComponent } from './video/video.component';
import { PictureComponent } from './picture/picture.component';

const routes: Routes = [
	
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	// { path: 'sidebar', component: SidebarComponent },
	{ path: 'display', component: DisplayComponent },
	{ path: 'stream', component: StreamComponent },
	// { path: 'nav', component: NavComponent },
	{ path: 'player', component: PlayerComponent },
	{ path: 'music', component: MusicComponent },
	// { path: 'playlist', component: PlaylistComponent },
	{ path: 'video', component: VideoComponent },
	{ path: 'picture', component: PictureComponent },
	// { path: ' Other_media', component: musicComponent },
	{ path: '**', component: NullpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
								HomeComponent,
								DisplayComponent,
								// SidebarComponent,
								NullpageComponent,
								// NavComponent,
								StreamComponent,
								PlayerComponent,
								MusicComponent, 
								VideoComponent,
								PictureComponent]
