import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './input'

class Form extends Component {
  state = { 
    data:{},
    errors:{} 
  }

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input)

    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = {...this.state.data}
    data[input.name] = input.value

    this.setState({data,errors})
 }
  
  
  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({errors: errors || {}})
    if(errors) return     

    this.doSubmit()
  }
  handleSelect = e => {
    e.preventDefault()
    let data = {...this.state.data}
    let selected =  e.target.value
    data = {...data, selected}
    this.setState({data})
    console.log(this.state.data)
    console.log(JSON.stringify(data))
  }


  validate = () => { 
    const options = {abortEarly: false}
    const {error} = Joi.validate(this.state.data, this.schema, options)
    if (!error) return null
    const errors = {}
    for (let item of error.details)
      errors[item.path[0]] = item.message
    return errors;
  }
  
  validateProperty = ({name, value}) => {
    const obj = {[name]: value}
    const schema = {[name]: this.schema[name]}
    const {error} = Joi.validate(obj,schema)
    return error ? error.details[0].message: null
  }
  renderButton = (label) => {
   return <button
        disabled={this.validate()} 
        className="btn btn-primary">{label}
    </button>
  } 
  renderSelectInput = (name,label) =>{
    const {data} = this.state
    console.log(data.selected)
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select 
          className="custom-select mb-4"
          value={data.selected}
          onChange={(e) => this.handleSelect(e)}
          >
          <option className="form-control"  value>Open this select menu</option>
            {data.genres.map(g => <option 
              key={g._id}
              value={g.name} 
              className="form-control"
              >
              {g.name}
          </option>)}
        </select>
    </div>
    )
  }
  renderInput = (name,label,type='text') =>{
    const {data,errors} = this.state
    
    return <Input 
          type={type}
          label={label}
          name={name} 
          value={data[name]} 
          onChange={this.handleChange}
          error={errors[name]}/>
  }
}
 
export default Form;