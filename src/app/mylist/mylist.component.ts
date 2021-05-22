import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  movie

  constructor(private ms: MovieService) { }

  ngOnInit(): void {    
    this.ms.getMovieData().subscribe(resp => this.movie = resp)
    console.log(this.movie)
  }

}
