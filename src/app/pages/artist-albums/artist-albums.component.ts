import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/SpotifyService';
@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss'],
})
export class ArtistAlbumsComponent implements OnInit {
  artistId: string = '';
  artistName: string = '';
  artistAlbums: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.artistId = params['id'];
      this.artistName = params['artistName'];
    });
    this.getArtistAlbums(this.artistId);
  }

  getArtistAlbums(artistId: string): void {
    this.spotifyService.getArtistAlbums(artistId).subscribe(
      (albums: any) => {
        this.artistAlbums = albums.items;
      },
      (error) => {
        console.error('Error fetching artist albums:', error);
      }
    );
  }
}
