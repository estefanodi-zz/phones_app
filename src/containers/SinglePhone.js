import      React       from 'react'
import   { connect }    from 'react-redux'
import SinglePhoneDetails from '../components/SinglePhoneDetails'	
import { removePhone }    from '../actions/phonesActions'     

function SinglePhone({ onRemove,changePage,phones,index,id }){
    return <SinglePhoneDetails onRemove   ={onRemove}
                               changePage ={changePage} 
                               phone      ={phones[index]}
                               index      ={index} 
                               id         ={id}/>
}

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removePhone(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePhone);



