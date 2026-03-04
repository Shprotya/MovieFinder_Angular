import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IOMDBResponce } from './models/iomdbresponce';

@Injectable({
  providedIn: 'root',
})
export class OmdbAPIService {
  private _siteURL = "https://www.omdbapi.com/"
  private _key = "4bbb8ce2"
  public http = inject(HttpClient);

  constructor(private _http:HttpClient) { }

}
