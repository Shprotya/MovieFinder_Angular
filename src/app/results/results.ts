import { Component } from '@angular/core';
import { MovieapiService } from '../movie-apiservice';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  protected movieService = inject(MovieapiService);
}
