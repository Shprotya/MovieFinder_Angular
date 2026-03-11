import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './search/search';
import { Details } from './details/details';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search, Details, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MovieFinderApp_CA');
}
