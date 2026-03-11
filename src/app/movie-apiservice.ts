import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';
import { Response } from './models/moviedetails.interface'; // Fixed: was importing Details component (circular dep)

@Injectable({
  providedIn: 'root',
})
export class MovieapiService {
  private http = inject(HttpClient);

  private readonly _siteURL = "https://www.omdbapi.com/";
  private readonly _key = "4bbb8ce2";

  public movie = signal<Response | null>(null);

  constructor() { }

  getMovie(title: string) {
    const url = `${this._siteURL}?t=${title}&apikey=${this._key}`;

    this.http.get<Response>(url)
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