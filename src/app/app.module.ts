import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistListComponent } from './pages/library/artist-list/artist-list.component';
import { SongListComponent } from './pages/library/song-list/song-list.component';
import { GenreListComponent } from './pages/library/genre-list/genre-list.component';
import { PlaylistListComponent } from './pages/library/playlist-list/playlist-list.component';
import { LibraryNavComponent } from './pages/library/library-nav/library-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SearchComponent,
    ArtistListComponent,
    SongListComponent,
    GenreListComponent,
    PlaylistListComponent,
    LibraryNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
