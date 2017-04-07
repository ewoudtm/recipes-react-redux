import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'

export class SignIn extends PureComponent {

  submitForm(event) {
    console.log('submit called')
    event.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signIn(user)
  }

  validateAll() {
    return
      true
  }

  validateEmail() {
    const { email } = this.refs
  }

  validatePassword() {
    const { password } = this.refs
  }

  render() {
    return (
      <div className="sign-in form">
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="email" placeholder="Email address"
              onChange={this.validateEmail.bind(this)} />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password"
              onChange={this.validatePassword.bind(this)} />
          </div>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
}



export default connect(null, { signIn })(SignIn)
