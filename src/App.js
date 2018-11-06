import React , { Component } from 'react'
import Navbar from './components/Navbar'
import Phones from './containers/Phones'
import CreatePhone from './containers/CreatePhone'
import SinglePhone from './containers/SinglePhone'
import UpdatePhone from './containers/UpdatePhone'

import './stylesheets/App.css'

class App extends Component {
 constructor(){
  super()
    this.changePage = this.changePage.bind(this)
    this.state = {
      page : 'phones'
    }
 }

  changePage = (page,index,id) =>{
    this.setState({page,index,id})
  }

  render() {
    let { page } = this.state, view;
    if( page === 'phones')   { view = <Phones changePage={this.changePage}/>}
    if( page === 'new_phone'){ view = <CreatePhone id={this.state.id}
                                                   index={this.state.index}
                                                   changePage={this.changePage}/>}
    if( page === 'update')   { view = <UpdatePhone id={this.state.id}
                                                   index={this.state.index}
                                                   changePage={this.changePage}/>}
    if( page === 'details')  { view = <SinglePhone id={this.state.id}
                                                   index={this.state.index}
                                                   changePage={this.changePage}/>}
    return (
      <div className="main_container">
       <Navbar id={this.state.id}
               index={this.state.index}
               changePage={this.changePage}/>
       { view }
      </div>
    );
  }
}

export default App