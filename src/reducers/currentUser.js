import { USER_SIGNED_IN } from '../actions/user/sign-in'

export default (state = false, { type, payload } = {}) => {
  switch(type) {
    case USER_SIGNED_IN :
      console.log('rejuicing')
      return payload

    default:
      return state


  }
}
