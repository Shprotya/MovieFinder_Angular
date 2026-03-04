import { Component } from '@angular/core';
import { MovieapiService } from '../movie-apiservice';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  private movieService = inject(MovieapiService);

  onSearch(title: string): void {
    if (title.trim()) {
      this.movieService.getMovie(title);
    }
  }
}
