import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { SpotifyService } from '../app/services/SpotifyService';
import { HeaderComponent } from './layout/header/header.component';

const authConfig: AuthConfig = {
  clientId: '95821d141f6d4b41b6c4168c32001080',
  redirectUri: window.location.origin + '/artist-search',
  responseType: 'token',
};
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
  ],
  providers: [OAuthService, SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
