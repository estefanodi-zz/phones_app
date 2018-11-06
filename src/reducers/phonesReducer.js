import { CREATE_PHONE, REMOVE_PHONE, GET_PHONES, UPDATE_PHONE } from '../actions/actionsTypes'

export default function phoneReducer(state = [], action) {
  switch (action.type) {
    case GET_PHONES:
      return action.phones
    case CREATE_PHONE:
      return [...state, action.payload]
    case REMOVE_PHONE:
      return state.filter(phone => phone._id !== action.payload.id)
    case UPDATE_PHONE:
      return action.phones
    default:
      return state
  }
}