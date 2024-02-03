import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-register-form',
  templateUrl: './artist-register-form.component.html',
  styleUrls: ['./artist-register-form.component.scss'],
})
export class ArtistRegisterFormComponent {
  artistRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.artistRegistrationForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        dob: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^[0-9]{8}$/)],
        ],
        profilePicture: ['', Validators.required],
        stageName: [''],
        startingDate: [''],
        backstory: [''],
      }),
      albums: this.fb.array([]), // Form array for albums
    });
  }

  // Getters for easy access in the template
  get personalInfo() {
    return this.artistRegistrationForm.get('personalInfo') as FormGroup;
  }

  get albums() {
    return this.artistRegistrationForm.get('albums') as FormArray;
  }

  // Add Album to Form Array
  addAlbum() {
    this.albums.push(
      this.fb.group({
        picture: [''],
        date: [''],
        songs: [''],
        name: [''],
        duration: [''],
      })
    );
  }

  // Remove Album from Form Array
  removeAlbum(index: number) {
    this.albums.removeAt(index);
  }

  isInvalid(controlPath: string): boolean {
    const control = this.artistRegistrationForm.get(controlPath);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
  onSubmit() {
    this.artistRegistrationForm.markAllAsTouched();

    if (this.artistRegistrationForm.valid) {
      console.log('Form submitted:', this.artistRegistrationForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
