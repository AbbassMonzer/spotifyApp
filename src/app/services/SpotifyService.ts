import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private clientId = '95821d141f6d4b41b6c4168c32001080';
  private redirectUri = 'http://localhost:4200/artist-search';
  private apiUrl = 'https://api.spotify.com/v1';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getAuthUrl(): string {
    const scopes = ['user-read-private', 'user-read-email'];
    const state = 'your-random-state';

    const authUrl =
      `https://accounts.spotify.com/authorize?` +
      `client_id=${this.clientId}` +
      `&response_type=token` +
      `&redirect_uri=${this.redirectUri}` +
      `&scope=${scopes.join(' ')}` +
      `&state=${state}`;

    return authUrl;
  }

  getArtistAlbums(artistId: string): Observable<any> {
    const accessToken = localStorage.getItem('spotify_access_token');
    const url = `${this.apiUrl}/artists/${artistId}/albums`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.get(url, { headers });
  }

  searchArtists(query: string) {
    const accessToken = localStorage.getItem('spotify_access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const params = new HttpParams().set('q', query).set('type', 'artist');

    return this.http.get(`${this.apiUrl}/search`, { headers, params });
  }

  async handleCallback(): Promise<boolean> {
    return new Promise((resolve) => {
      this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
          const queryParams = new URLSearchParams(fragment);
          const accessToken = queryParams.get('access_token');

          // Handle the access token
          if (accessToken) {
            localStorage.setItem('spotify_access_token', accessToken);
            console.log('token', accessToken);
            resolve(true);
          } else {
            console.error('Access token not found in the URL fragment.');
            resolve(false);
          }
        }
      });
    });
  }
}
