import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './search/search';
import { Details } from './details/details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search, Details],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-finder');
}
