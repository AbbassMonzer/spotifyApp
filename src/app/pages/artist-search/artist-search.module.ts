import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistSearchRoutingModule } from './artist-search-routing.module';
import { ArtistSearchComponent } from './artist-search.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../../components/card/card.module';
@NgModule({
  declarations: [ArtistSearchComponent],
  imports: [CommonModule, ArtistSearchRoutingModule, FormsModule, CardModule],
})
export class ArtistSearchModule {}
