import React, { Component } from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Movies from './components/movies'
import MovieDetails from './components/movieForm'
import Customers from './components/customers'
import Rental from './components/rentals'
import NavBar from './components/navbar'
import NotFound from './components/notFound'
import './App.css';

class App extends Component {
  render (){
    return(
      <React.Fragment>
        <NavBar/>
           <main className="container">
            <Switch>
              <Route path="/movies/:id" component={MovieDetails}/>
              <Route path="/rentals" component={Rental}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/not-found" component={NotFound}/>
              <Route path="/movies" exact component={Movies}/>
              <Redirect from="/" to="/movies" exact />
              <Redirect to="/not-found" />
            </Switch>
           </main>
      </React.Fragment>
        
    )
  }

}

export default App;
