import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() artist: boolean = false;
  @Input() album: boolean = false;
  @Input() artistId: number = 0;

  @Input() artistPopularity: number = 0;
  @Input() artistFollowers: number = 0;
  @Input() artistImage: string = '';
  @Input() artistName: string = '';

  @Input() albumName: string = '';
  @Input() albumDate: string = '';
  @Input() albumTracks: number = 0;
  @Input() albumImage: string = '';
  navigate() {
    this.router.navigate(['/artist-albums', this.artistId, this.artistName]);
  }

  getStarRating(popularity: number): string {
    const starRating = Math.ceil(popularity / 20);
    const starIcons = '<img src="assets/icons/star.svg" alt="star" />'.repeat(
      starRating
    );
    return starIcons;
  }
}
