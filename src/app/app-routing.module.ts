import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { SongsComponent } from './pages/songs/songs.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistListComponent } from './pages/library/artist-list/artist-list.component';
import { SongListComponent } from './pages/library/song-list/song-list.component';
import { PlaylistListComponent } from './pages/library/playlist-list/playlist-list.component';
import { GenreListComponent } from './pages/library/genre-list/genre-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: DashboardComponent },
    { path: 'search', component: SearchComponent },
    { path: 'library/songs', component: SongListComponent },
    { path: 'library/artists', component: ArtistListComponent },
    { path: 'library/playlists', component: PlaylistListComponent },
    { path: 'library/genres', component: GenreListComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
