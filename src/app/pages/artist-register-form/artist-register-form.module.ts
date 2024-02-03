import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRegisterFormRoutingModule } from './artist-register-form-routing.module';
import { ArtistRegisterFormComponent } from './artist-register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ArtistRegisterFormComponent],
  imports: [CommonModule, ArtistRegisterFormRoutingModule, ReactiveFormsModule],
})
export class ArtistRegisterFormModule {}
