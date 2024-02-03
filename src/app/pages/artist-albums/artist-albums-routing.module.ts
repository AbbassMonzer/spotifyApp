import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistAlbumsComponent } from './artist-albums.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistAlbumsRoutingModule {}
