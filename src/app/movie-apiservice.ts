import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { take } from 'rxjs';
import { MovieResults, SearchResults } from './models/moviedetails.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieapiService {
  private http = inject(HttpClient);

  private readonly _siteURL = "https://www.omdbapi.com/";
  private readonly _key = "4bbb8ce2";
  private readonly _perPage = 10;
  private _lastQuery = '';

  public movies = signal<MovieResults[] | null>(null);
  public movie = signal<MovieResults | null>(null);

  public totalResults = signal<number>(0);
  public currentPage = signal<number>(1);
  public maxPages = computed(() => Math.ceil(this.totalResults() / this._perPage));

  getMovies(title: string, page: number = 1) {
    this._lastQuery = title;
    const url = `${this._siteURL}?s=${title}&page=${page}&apikey=${this._key}`;

    this.http.get<any>(url)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          if (data.Response === "True") {
            this.movies.set(data.Search);
            this.totalResults.set(+data.totalResults);  // + converts string to number
            this.currentPage.set(page);
          } else {
            this.movies.set([]);
            this.totalResults.set(0);
            this.currentPage.set(1);
          }
        },
        error: (err) => {
          console.error(err);
          this.movies.set([]);
          this.totalResults.set(0);
          this.currentPage.set(1);
        }
      });
  }

  nextPage() {
    if (this.currentPage() < this.maxPages()) {
      this.getMovies(this._lastQuery, this.currentPage() + 1);
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.getMovies(this._lastQuery, this.currentPage() - 1);
    }
  }

  getMovie(id: string) {
    const url = `${this._siteURL}?i=${id}&apikey=${this._key}`;
    this.http.get<MovieResults>(url)
      .pipe(take(1))
      .subscribe({
        next: (data) => this.movie.set(data),
        error: (err) => {
          console.error(err);
          this.movie.set(null);
        }
      });
  }
}