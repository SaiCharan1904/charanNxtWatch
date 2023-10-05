import {BsList} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  background-color: ${props => props.backgroundColor};

  @media screen and (min-width: 768px) {
    height: 15vh;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
export const ImageElement = styled.img`
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
`

export const ListItem = styled.li`
  text-decoration: none;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const DarkButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  margin-bottom: 1px;
`
export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled(DarkButton)`
  border: 1px solid ${props => props.logoutColor};
  outline: none;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    outline: none;
    border: none;
    cursor: pointer;
  }
`
export const LogoutText = styled.p`
  color: ${props => props.logoutColor};
  margin: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIcon = styled(FiLogOut)`
  color: ${props => props.iconColor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 250px;
  background-color: ${props => props.background};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 180px;
    width: 400px;
  }
`
export const PopQuestion = styled.p`
  color: ${props => props.popUpColor};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const CancelButton = styled.button`
  padding: 8px 16px;
  border: 1px solid;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
  background-color: ${props => props.background};
  border-radius: 4px;
`
export const ConfirmButton = styled(CancelButton)`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
`
export const BsListItem = styled(BsList)`
  color: ${props => props.iconColor};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
