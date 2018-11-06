import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'

export default class NewPhone extends React.Component{
  constructor(props){
  	super(props)
  	this.state = {
	    model : '',
	    image : '',
	    color : '',
	    price : '',
	    description : ''
	}
  }


  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
      let { model,image,color,price,description } = this.state
      if( !model | !image | !color | !price | !description ){ 
      	return alert('please fill all fields')
      }else{
      	this.props.onAddPhone(this.state)
      	this.props.changePage('phones',this.state.index,this.state.id)
      }
  }

  render(){
	return(
       <div className = 'create_phone_container'>
		  <Form className = 'form_container' 
		        onSubmit  = {this.handleSubmit.bind(this)}
                onChange  = {this.handleChange.bind(this)}>
		    <Form.Group widths={2}>
		      <Form.Input label       = 'Model'     
		                  placeholder = 'Model'
		                  name        = 'model'/>
		      <Form.Input label       = 'Image_url' 
		                  placeholder = 'Image_url'
		                  name        = 'image'/>
		    </Form.Group>
		    <Form.Group widths={2}>
		      <Form.Input label       = 'Color' 
		                  placeholder = 'Color'
		                  name        = 'color'/>
		      <Form.Input label       = 'Price' 
		                  placeholder = 'Price'
		                  name        = 'price'/>
		    </Form.Group>
		    <TextArea placeholder = 'Description here' 
		              style       = {{ minHeight: 100 }}
		              name        = 'description'/>
		    <div className='buttons_container'>
		    	<Button fluid type='submit' style = {{width:'90%',marginTop: '30px'}}>Submit</Button>
		    	<Button fluid 
		    	        color='purple' 
		    	        style = {{width:'10%',marginTop: '30px'}}
		    	        onClick={()=>this.props.changePage('phones',this.state.index,this.state.id)}>X</Button>
		    </div>
		  </Form>
       </div>
	  )
	}
}