import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/SpotifyService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private spotifyService: SpotifyService) {}

  login(): void {
    const authUrl = this.spotifyService.getAuthUrl();
    window.location.href = authUrl;
  }
}
