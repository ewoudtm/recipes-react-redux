export const USER_SIGNED_IN = 'USER_SIGNED_IN'
import API from '../../middleware/api'

const api = new API()
const users = api.service('users')

export default (user) => {
  return(dispatch) => {
    api.authenticate(user)
    .then((result) => {
      dispatch(userSignedIn(result))
      console.log('user logged in')
    })
    .catch((error) => {
      console.log('oops something went wrong')
    })
  }
}

const userSignedIn = (result) => {
  console.log('signing user in ')
  return {
    type: USER_SIGNED_IN,
    payload: [].concat(result.data)
  }
}
