import { Component } from '@angular/core';
import { SpotifyService } from '../../services/SpotifyService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  constructor(private spotifyService: SpotifyService) {}
  login(): void {
    const authUrl = this.spotifyService.getAuthUrl();
    window.location.href = authUrl;
  }
}
