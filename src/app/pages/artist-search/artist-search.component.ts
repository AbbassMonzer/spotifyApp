import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/SpotifyService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
})
export class ArtistSearchComponent implements OnInit {
  constructor(private router: Router, private spotifyService: SpotifyService) {}
  searchTerm: string = '';
  searchResults: any[] = [];
  ngOnInit(): void {
    this.spotifyService.handleCallback().then((authenticated: any) => {
      if (authenticated) {
        this.router.navigate(['/artist-search']);
      } else {
        console.error('Authentication failed.');
      }
    });
  }

  onSearchChange(): void {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.spotifyService
        .searchArtists(this.searchTerm)
        .subscribe((results: any) => {
          this.searchResults = results.artists.items;
        });
    } else {
      // Clear search results if the search term is null or empty
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
