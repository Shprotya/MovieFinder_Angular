import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';
import { Details } from './details/details';

@Injectable({
  providedIn: 'root',
})

export class MovieapiService {
  private http = inject(HttpClient);

  private readonly _siteURL = "https://www.omdbapi.com/";
  private readonly _key = "4bbb8ce2";

  public movie = signal<Details | null>(null);

  constructor() { }

  getMovie(title: string) {
    const url = `${this._siteURL}?t=${title}&apikey=${this._key}`;

    this.http.get<Details>(url)
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