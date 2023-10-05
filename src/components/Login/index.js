import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ContextTheme from '../../Context/ContextTheme'

import {
  AppContainer,
  LoginContainer,
  LogoImage,
  FormContainer,
  Label,
  Input,
  PasswordInput,
  ShowPasswordContainer,
  CheckInput,
  LabelPassword,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    toShow: false,
    error: false,
    errorMsg: '',
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.setState({
        errorMsg: data.error_msg,
        error: true,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = labelColor => {
    const {username} = this.state

    return (
      <>
        <Label labelColor={labelColor} htmlFor="username">
          USERNAME
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      toShow: !prevState.toShow,
    }))
  }

  renderPassword = colorPassword => {
    const {toShow, password} = this.state
    const show = toShow ? 'text' : 'password'

    return (
      <>
        <Label labelColor={colorPassword} htmlFor="password">
          PASSWORD
        </Label>
        <PasswordInput
          id="password"
          type={show}
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
        <ShowPasswordContainer>
          <CheckInput
            id="showPassword"
            type="checkbox"
            onClick={() => this.onClickCheckbox()}
          />
          <LabelPassword colorPassword={colorPassword} htmlFor="showPassword">
            Show Password
          </LabelPassword>
        </ShowPasswordContainer>
      </>
    )
  }

  render() {
    const {error, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ContextTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          const backgroundColor = isDarkTheme ? '#212121' : ''
          const colorPassword = isDarkTheme ? '#ffffff' : '#1e293b'
          const labelColor = isDarkTheme ? '#ffffff' : '#475569'
          const LoginBackground = isDarkTheme ? '#000000' : ''

          return (
            <AppContainer backgroundColor={backgroundColor}>
              <LoginContainer>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <FormContainer
                  LoginBackground={LoginBackground}
                  onSubmit={this.SubmitForm}
                >
                  {this.renderUsername(labelColor)}
                  {this.renderPassword(colorPassword)}
                  <LoginButton type="submit">Login</LoginButton>
                  {error && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </AppContainer>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Login
