import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NullpageComponent } from './nullpage/nullpage.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { PlayerComponent } from './player/player.component';
import { MusicComponent } from './music/music.component';
import { VideoComponent } from './video/video.component';
import { PictureComponent } from './picture/picture.component';
import { RightplayComponent } from './rightplay/rightplay.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    NullpageComponent,
    DisplayComponent,
    HomeComponent,
    StreamComponent,
    PlayerComponent,
    MusicComponent,
    VideoComponent,
    PictureComponent,
    RightplayComponent,
    PlaylistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 