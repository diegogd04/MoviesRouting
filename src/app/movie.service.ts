import { Injectable } from '@angular/core';
import { movies } from './shared/MockMovies';
import { Movie } from './shared/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = movies
  selectedMovie?: Movie

  getMovies() {
    return movies
  }
}
