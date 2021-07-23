import React from 'react'

const MovieForm = ({match, history}) => {
  // handleSave = () => {
  //   this.props.history.replace("/movies")
  // }
    return ( 
     <div>
       <h2>Movie Form {match.params.id}</h2>
       <button className="btn btn-primary" 
       onClick={() => history.push("/movies")}>Save</button>
     </div>
    );
}
 
export default MovieForm;