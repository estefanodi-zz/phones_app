import    React        from 'react'
import { connect }     from 'react-redux'
import { createPhone } from '../actions/phonesActions'
import    NewPhone     from '../components/NewPhone'

function CreatePhone({onAddPhone,index,id,changePage}){
  return <NewPhone index      = {index}
                   id         = {id}
                   changePage = {changePage}
                   onAddPhone = {onAddPhone}/>
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPhone: phone => {
      dispatch(createPhone(phone));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePhone);