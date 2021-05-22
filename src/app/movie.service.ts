import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'https://api.themoviedb.org/3/list/1?api_key=f4035ed61edfd46a78ca2865f6783558'

  constructor(private http: HttpClient) {}

  getMovieData() {
    return this.http.get(this.url)
  }
}
