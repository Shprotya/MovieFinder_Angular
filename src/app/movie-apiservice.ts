import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';
import { MovieResults, SearchResults } from './models/moviedetails.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieapiService {
  private http = inject(HttpClient);

  private readonly _siteURL = "https://www.omdbapi.com/";
  private readonly _key = "4bbb8ce2";

  public movies = signal<MovieResults[] | null>(null);
  public movie = signal<MovieResults | null>(null);

  constructor() { }

  getMovies(title: string) {
    const url = `${this._siteURL}?s=${title}&apikey=${this._key}`;

    this.http.get<SearchResults>(url)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          if (data.Response === "True") {
            this.movies.set(data.Search);
          } else {
            this.movies.set([]); 
          }
        },
        error: (err) => {
          this.movies.set([]);  
        }
      });
  }

  getMovie(id: string) {
    const url = `${this._siteURL}?i=${id}&apikey=${this._key}`;
    this.http.get<MovieResults>(url)
      .pipe(take(1))
      .subscribe({
        next: (data) => this.movie.set(data),
        error: (err) => {
          console.error('Error fetching movie:', err);
          this.movie.set(null);
        }
      });
  }
}