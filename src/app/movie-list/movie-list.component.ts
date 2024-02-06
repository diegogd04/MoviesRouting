import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = []
  selectedMovie: Movie = { Title: "", Year: 0, Genre: "", Actors: "", Plot: "", Poster: "" }
  @Output() movieSelected = new EventEmitter<Movie>()

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.movies = this.movieService.getMovies()
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie
    this.movieSelected.emit(movie)
    this.movieService.selectedMovie = movie
  }
}
