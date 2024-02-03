import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist-search.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistSearchRoutingModule {}
