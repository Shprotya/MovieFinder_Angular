import { Component } from '@angular/core';
import { MovieapiService } from '../movie-apiservice';
import { inject } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  protected movieService = inject(MovieapiService);

  protected id = input.required<string>();

  ngOnInit() {
    let movieID = this.id();
    this.movieService.getMovie(movieID);
  }

}
