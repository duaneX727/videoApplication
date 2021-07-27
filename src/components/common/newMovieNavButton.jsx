import { withRouter } from 'react-router-dom'

const NewMovieNavButton = withRouter(({ history }) => (
      <div>
        <button
        onClick={() => history.push('/movies/new')}    
        className="btn btn-primary btn-large">New Movie
        </button>
      </div>
))
export default NewMovieNavButton;


// source: https://www.codegrepper.com/code-examples/javascript/react+onclick+redirect+to+route

// import React, { Component } from 'react';


// class NewMovieNavButton extends Component {
//   handleChangeRoute = () => {
//     this.props.history.push('/movies/new')
//   }
//   render() { 
//     return ( <div>
//       <button
//          onClick={() => history.push('/movies/new')}    
//          className="btn btn-primary btn-large">New Movie
//       </button>
//     </div> );
//   }
// }



















