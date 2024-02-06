import { Component } from '@angular/core';
import { Movie } from './shared/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMovie: Movie = { Title: "", Year: 0, Genre: "", Actors: "", Plot: "", Poster: "" }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie
  }
}
