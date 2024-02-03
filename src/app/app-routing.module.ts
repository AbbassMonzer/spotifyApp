import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'artist-search',
    loadChildren: () =>
      import('./pages/artist-search/artist-search.module').then(
        (m) => m.ArtistSearchModule
      ),
  },
  {
    path: 'artist-register-form',
    loadChildren: () =>
      import('./pages/artist-register-form/artist-register-form.module').then(
        (m) => m.ArtistRegisterFormModule
      ),
  },
  {
    path: 'artist-albums/:id/:artistName',
    loadChildren: () =>
      import('./pages/artist-albums/artist-albums.module').then(
        (m) => m.ArtistAlbumsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
