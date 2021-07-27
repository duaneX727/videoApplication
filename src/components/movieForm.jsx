import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import { getGenres } from '../services/fakeGenreService'


class MovieForm extends Form {
  state = { 
    data: {
      title: '', 
      genres: [ ...getGenres()],
      numberInStock: 0, 
      dailyRentalRate: 0}, 
      errors:{} 
  }

  schema = {
    title: Joi.string()
        .required()
        .label('Title')
        .min(1),
    // genre:[{name: Joi.string()
    //     .required()
    //     .label('Genre')},],
    numberInStock: Joi.number()
        .required()
        .label('Number in Stock')
        .min(0)
        .max(100),
    dailyRentalRate: Joi.number()
        .required()
        .label('Rate')
        .min(0)
        .max(10)
  }
  
  
  doSubmit = () => {
    // Call the server
    console.log("Submitted")
  }
 
  render() { 
     const {data} = this.state
    //console.log(data)
    return (<div>
      <h1 className="mb-4">Movie Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('title','Title')}
        {this.renderSelectInput('genres','Genre')}
        {this.renderInput('numberInStock','Number in Stock')}
        {this.renderInput('dailyRentalRate','Rate')}
        {this.renderButton('Save')}
      </form>
    </div>);
  }
}
 
export default MovieForm;