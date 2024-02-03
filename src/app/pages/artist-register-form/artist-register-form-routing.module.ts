import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistRegisterFormComponent } from './artist-register-form.component';

/////////////////////
const routes: Routes = [
  {
    path: '',
    component: ArtistRegisterFormComponent,
  },
];
/////////////////////
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
/////////////////////
export class ArtistRegisterFormRoutingModule {}
