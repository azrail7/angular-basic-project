import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  current
  movieList
  searchTerm = ""

  constructor(private ms: MovieService) { }

  ngOnInit(): void {    
    this.ms.getMovieData()
    .subscribe(resp => {this.movieList = resp; this.current = this.movieList.items[0]})
  }

  setCurrent(movie) {
    this.current = movie
  }
}
