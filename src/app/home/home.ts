import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Details } from '../details/details';
import { Results } from '../results/results';

@Component({
  selector: 'app-home',
  imports: [Search, Details, Results],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
