import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'

export default class ModifiedPhone extends React.Component{
  constructor(props){
  	super(props)
  	this.state = {
	    model       : this.props.phone.model,
	    image       : this.props.phone.image,
	    color       : this.props.phone.color,
	    price       : this.props.phone.price,
	    description : this.props.phone.description,
	    id          : this.props.id      
	  }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
      	this.props.onUpdatePhone(this.state)
      	this.props.changePage('phones')
  }

  render(){
	return(
       <div className = 'create_phone_container'>
		  <Form className = 'form_container' 
		        onSubmit  = {this.handleSubmit.bind(this)}
                onChange  = {this.handleChange.bind(this)}>
		    <Form.Group widths={2}>
		      <Form.Input label       = 'Model'     
		                  placeholder = {this.props.phone.model}
		                  name        = 'model'/>
		      <Form.Input label       = 'Image_url' 
		                  placeholder = {this.props.phone.image}
		                  name        = 'image'/>
		    </Form.Group>
		    <Form.Group widths={2}>
		      <Form.Input label       = 'Color' 
		                  placeholder = {this.props.phone.color}
		                  name        = 'color'/>
		      <Form.Input label       = 'Price' 
		                  placeholder = {this.props.phone.price}
		                  name        = 'price'/>
		    </Form.Group>
		    <TextArea placeholder = {this.props.phone.description}
		              style       = {{ minHeight: 100 }}
		              name        = 'description'/>
		    <div className='buttons_container'>
		    	<Button fluid type='submit' style = {{width:'90%',marginTop: '30px'}}>Submit</Button>
		    	<Button fluid 
		    	        color='purple' 
		    	        style = {{width:'10%',marginTop: '30px'}}
		    	        onClick={()=>this.props.changePage('phones')}>X</Button>
		    </div>
		  </Form>
       </div>
	  )
	}
}