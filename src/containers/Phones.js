import      React       from 'react'
import   { connect }    from 'react-redux'
import SingleSmallPhone from '../components/SingleSmallPhone'

function Phones({ changePage, phones }) {
  if(phones.length) {
   return (
    <div className='phones_container'>
      {
       phones.map((phone,i) => {
        return <SingleSmallPhone 
                 phone = { phone } 
                 index = { i } 
                 key   = { i }
                 changePage = { changePage }/>
       })
     }
    </div>
  )
  }else{
    return <div></div>
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones
  };
};

export default connect(
  mapStateToProps,
  null
)(Phones);