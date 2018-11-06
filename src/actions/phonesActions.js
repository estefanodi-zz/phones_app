import { CREATE_PHONE, REMOVE_PHONE, GET_PHONES, UPDATE_PHONE } from './actionsTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:3030/phones'
//==============================================================================
//===================== GET PHONES =============================================
//==============================================================================
export const getPhones = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/all-phones`)
      .then(response => {
        dispatch(getPhonesSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const getPhonesSuccess = (phones) => {
  return {
    type: GET_PHONES,
    phones
  }
}
//==============================================================================
//===================== CREATE PHONE ===========================================
//==============================================================================
export const createPhone = ({ model, description, image, color, price }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/create-phone`, {model, description, image, color, price})
      .then(response => {
        dispatch(createPhoneSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const createPhoneSuccess =  (data) => {
  return {
    type: CREATE_PHONE,
    payload: {
       color: data.newPhone.color,
       description: data.newPhone.description,
       image: data.newPhone.image,
       model: data.newPhone.model,
       price: data.newPhone.price,
       _id:   data.newPhone._id
    }
  }
}
//==============================================================================
//===================== REMOVE PHONE ===========================================
//==============================================================================
export const removePhone = id => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/remove-phone`, {id})
      .then(response => {
        dispatch(removePhoneSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const removePhoneSuccess = data => {
  return {
    type: REMOVE_PHONE,
    payload: {
      id:data.id
    }
  }
}
//==============================================================================
//===================== UPDATE PHONE ===========================================
//==============================================================================
export const updatePhone = ({model, description, image, color, price, id}) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/update-phone`,{model, description, image, color, price, id})
      .then(response => {
        dispatch(updatePhoneSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const updatePhoneSuccess = (phones) => {
  return {
    type: UPDATE_PHONE,
    phones
  }
}
