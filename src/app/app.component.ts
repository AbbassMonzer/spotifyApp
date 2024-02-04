import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Spotify-App';

  constructor( private router: Router) {}

  shouldShowHeader(): boolean {
    return this.router.url !== '/';
  }
}
