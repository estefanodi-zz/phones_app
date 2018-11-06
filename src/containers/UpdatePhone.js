import React from 'react';
import { connect }      from 'react-redux';
import { updatePhone }  from '../actions/phonesActions';
import  ModifiedPhone   from '../components/ModifiedPhone';

function UpdatePhone({onUpdatePhone,phones,index,id,changePage}){
  return <ModifiedPhone phone         = {phones[index]}
                        index         = {index}
                        id            = {id}
                        changePage    = {changePage}
                        onUpdatePhone = {onUpdatePhone}/>
}

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePhone: phone => {
      dispatch(updatePhone(phone));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePhone);