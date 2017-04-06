import { LOAD_ERROR } from '../actions/loading/load-error'
import { LOAD_SUCCESS } from '../actions/loading/load-success'


export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case LOAD_ERROR :
      console.error(payload)
      return payload
      
    case LOAD_SUCCESS :
      return null

    default:
      return state


  }
}
