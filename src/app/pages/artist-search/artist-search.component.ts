import { Component } from '@angular/core';
import { SpotifyService } from '../../services/SpotifyService';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
})
export class ArtistSearchComponent {
  constructor(private spotifyService: SpotifyService) {}
  searchTerm: string = '';
  searchResults: any[] = [];


  onSearchChange(): void {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.spotifyService
        .searchArtists(this.searchTerm)
        .subscribe((results: any) => {
          this.searchResults = results.artists.items;
        });
    } else {
      this.searchResults = [];
    }
  }

  getStarRating(popularity: number): string {
    const starRating = Math.ceil(popularity / 20);
    const starIcons = '<img src="assets/icons/star.svg" alt="star" />'.repeat(
      starRating
    );
    return starIcons;
  }
}
