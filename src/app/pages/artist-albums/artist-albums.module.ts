import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistAlbumsRoutingModule } from './artist-albums-routing.module';
import { ArtistAlbumsComponent } from './artist-albums.component';
import { CardModule } from '../../components/card/card.module';
@NgModule({
  declarations: [ArtistAlbumsComponent],
  imports: [CommonModule, ArtistAlbumsRoutingModule, CardModule],
})
export class ArtistAlbumsModule {}
