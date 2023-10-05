import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import ContextTheme from '../../Context/ContextTheme'

import {
  NavContainer,
  HeaderContainer,
  ImageElement,
  ListContainer,
  ListItem,
  DarkButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopQuestion,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  BsListItem,
  LogoutIcon,
  LogoutText,
} from './styledComponents'

const Header = props => (
  <ContextTheme.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, toToggleSlide} = value

      const onToggle = () => {
        toggleTheme()
      }

      const onClickList = () => {
        toToggleSlide()
      }

      const onLogout = () => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const backgroundColor = isDarkTheme ? '#212121' : ''

      const logoutColor = isDarkTheme ? '#ffffff' : '#3b82f6'

      const DarkOrLight = isDarkTheme ? (
        <BsBrightnessHigh size={20} color="#ffffff" />
      ) : (
        <FaMoon size={20} />
      )

      const popUpBackground = isDarkTheme ? '#212121' : '#f1f1f1'

      const colorPopup = isDarkTheme ? '#d7dfe9' : '#616e7c'
      const popUpQuestion = isDarkTheme ? '#ffffff' : '#00306e'
      const iconColor = isDarkTheme ? '#f1f1f1' : '#212121'

      return (
        <NavContainer backgroundColor={backgroundColor}>
          <HeaderContainer>
            <Link to="/">
              <ImageElement src={websiteLogo} alt="website logo" />
            </Link>
            <ListContainer>
              <ListItem>
                <DarkButton
                  type="button"
                  onClick={() => onToggle()}
                  data-testid="theme"
                >
                  {DarkOrLight}
                </DarkButton>
              </ListItem>
              <ListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <BsListItem
                  iconColor={iconColor}
                  size={20}
                  onClick={onClickList}
                />
              </ListItem>
              <ListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" logoutColor={logoutColor}>
                      <LogoutText logoutColor={logoutColor}>Logout</LogoutText>
                      <LogoutIcon
                        size={20}
                        type="button"
                        iconColor={iconColor}
                      />
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer background={popUpBackground}>
                      <PopQuestion popUpColor={popUpQuestion}>
                        Are you sure, you want to logout?
                      </PopQuestion>
                      <ButtonContainer>
                        <CancelButton
                          color={colorPopup}
                          background="transparent"
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={() => onLogout()}>
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </ListItem>
            </ListContainer>
          </HeaderContainer>
        </NavContainer>
      )
    }}
  </ContextTheme.Consumer>
)

export default withRouter(Header)
