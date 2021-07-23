import React, { Component } from 'react'
import { getGenres } from '../services/fakeGenreService'
import { getMovies } from "../services/fakeMovieService"
import { paginate } from '../utils/paginate'
import ListGroup from './common/listGroup'
import Pagination from './common/pagination'
import MoviesTable from './moviesTable'
import _ from 'lodash'


class Movies extends Component {
  state = {  
    movies: [],
    genres: [],
    pageSize: 4,
    currPage: 1,
    sortColumn: {
      path: 'title',
      order: 'asc'
    }
  }
  handleSort = sortColumn => {
      this.setState({
        sortColumn
      })
  }
  handleDelete = movie => {
   const movies = this.state.movies.filter(m => movie._id !== m._id)
   this.setState({movies})
  }
  handleLike = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked
    this.setState({movies})
  }
  handlePageChange = page =>{
    this.setState({currPage: page});
  }
   
  handleSelectedGenre = genre => {
     this.setState({selectedGenre: genre, currPage: 1})
  }
  componentDidMount() {
    let genres = [{ _id: '0', name: "All Genres"},...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    });
  }
  getPageData = () => {
    const {pageSize, currPage, movies: allMovies, selectedGenre, sortColumn} = this.state;
    const filtered = selectedGenre && selectedGenre._id !== "0" ? allMovies.filter(m => m.genre._id === selectedGenre._id): allMovies

    const sorted = _.orderBy(filtered,[sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted,currPage,pageSize)

    return { totalCount: filtered.length, data: movies}
  }
  render() { 
    const {pageSize, currPage, sortColumn,genres,selectedGenre} = this.state;
   
    const {totalCount, data:movies} = this.getPageData()
    if(totalCount === 0) return <p> There are no movies in the database.</p>
    return (
        <div className="container">
            <div className="row">
              <div className="col-3">
                <ListGroup 
                  items={genres}
                  selectedItem={selectedGenre}
                  onItemSelect={this.handleSelectedGenre}
                />
              </div>
              <div className="col-9">
                <p>Showing {totalCount}  movies in database.</p>
               <MoviesTable 
                  movies={movies} 
                  sortColumn={sortColumn}
                  onSort={this.handleSort}
                  onLike={this.handleLike} 
                  onDelete={this.handleDelete}/>
               <Pagination 
                  itemsCount={totalCount} 
                  pageSize={pageSize} 
                  onPageChange={this.handlePageChange}
                  currentPage={currPage}/>
              </div>
            </div>
        </div>
    )
  }
}
export default Movies;  

