import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRegisterFormComponent } from './artist-register-form.component';

describe('ArtistRegisterFormComponent', () => {
  let component: ArtistRegisterFormComponent;
  let fixture: ComponentFixture<ArtistRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
