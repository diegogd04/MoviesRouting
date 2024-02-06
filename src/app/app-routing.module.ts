import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MoviePlotComponent } from './movie-plot/movie-plot.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'poster', component: MoviePosterComponent },
  { path: 'plot', component: MoviePlotComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
