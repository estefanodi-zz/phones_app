import React from 'react'

export default class Navbar extends React.Component{
	render(){
		return(
           <div className='navbar'>
             <div className='navbar_left'>PHONES APP</div>
             <div className='navbar_right'>
               <button className = 'button header_button'
                       onClick   = {()=>this.props.changePage('new_phone')}>ADD NEW</button>
             </div>
           </div>
		)
	}
}