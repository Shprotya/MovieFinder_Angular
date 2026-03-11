import { Component } from '@angular/core';
import { MovieapiService } from '../movie-apiservice';
import { inject } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  public movieService = inject(MovieapiService);
}
