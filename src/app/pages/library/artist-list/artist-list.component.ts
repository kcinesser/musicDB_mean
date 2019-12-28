import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../classes/artist';
import { ArtistService } from '../../../services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }
}
