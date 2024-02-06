import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent {
  movie?: Movie = this.movieService.selectedMovie

  constructor(private movieService: MovieService) { }
}
