import ContextTheme from '../../Context/ContextTheme'
import Header from '../Header'
import Slide from '../Slide'

import {
  NotFoundContainer,
  NxtWatchContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styledComponents'

const NotFound = () => (
  <ContextTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const textColor = isDarkTheme ? '#ffffff' : ' #0f0f0f'
      const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      return (
        <>
          <Header />
          <NxtWatchContainer>
            <Slide />
            <NotFoundContainer backgroundColor={backgroundColor}>
              <FailureContainer>
                <FailureImage src={notFoundImage} alt="not found" />
                <FailureHeading textColor={textColor}>
                  Page Not Found
                </FailureHeading>
                <FailureText>
                  we are sorry, the page you requested could not be found.
                </FailureText>
              </FailureContainer>
            </NotFoundContainer>
          </NxtWatchContainer>
        </>
      )
    }}
  </ContextTheme.Consumer>
)

export default NotFound
