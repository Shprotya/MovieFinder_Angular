import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Details } from '../details/details';

@Component({
  selector: 'app-home',
  imports: [Search, Details],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
