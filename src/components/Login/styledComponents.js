import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;

  background-color: ${props => props.backgroundColor};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 40px #ebebeb;
  padding: 30px;
  background-color: ${props => props.LoginBackground};

  @media screen and (min-width: 768px) {
    width: 40%;
    padding: 60px;
  }
`
export const LogoImage = styled.img`
  width: 70%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-self: flex-start;
  margin-top: 60px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.labelColor};
  margin-bottom: 5px;
`
export const Input = styled.input`
  height: 40px;
  padding-left: 16px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 30px;
  outline: none;
`
export const PasswordInput = styled(Input)`
  margin-bottom: 12px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: flex-start;
`
export const CheckInput = styled.input`
  margin-right: 8px;
  outline: none;
`
export const LabelPassword = styled(Label)`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.colorPassword};
  text-align: center;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  color: #ff0b37;
  margin-top: 2px;
`
