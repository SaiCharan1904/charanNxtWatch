import {HiFire} from 'react-icons/hi'
import ContextContent from '../../Context/ContextTheme'

import Header from '../Header'
import Slide from '../Slide'
import SavedItem from '../SavedItem'

import {
  SavedGamesContainer,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  HeaderContainer,
  IconContainer,
  HeaderText,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ContextContent.Consumer>
    {value => {
      const {isDarkTheme, savedVideos, smallSizeSlide} = value

      const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headerBackground = isDarkTheme ? '#383838' : '#f1f5f9'
      const headerTextColor = isDarkTheme ? '#ffffff' : '#1e293b'
      const IconBg = isDarkTheme ? '#0f0f0f' : '#94a3b8'

      const display = smallSizeSlide ? 'none' : 'flex'

      const getNoSavedVideos = () => {
        const textColor = isDarkTheme ? '#ffffff' : ' #0f0f0f'

        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading textColor={textColor}>
              No saved videos found
            </FailureHeading>
            <FailureText>
              You can save your videos while watching them
            </FailureText>
          </FailureContainer>
        )
      }

      const getVideos = () => (
        <>
          <HeaderContainer
            data-testid="banner"
            headerBackground={headerBackground}
          >
            <IconContainer IconBg={IconBg}>
              <HiFire size={30} color="#ff0000" />
            </IconContainer>
            <HeaderText headerTextColor={headerTextColor}>
              Saved Videos
            </HeaderText>
          </HeaderContainer>
          <SavedVideosListContainer>
            {savedVideos.map(eachVideo => (
              <SavedItem key={eachVideo.id} details={eachVideo} />
            ))}
          </SavedVideosListContainer>
        </>
      )

      return (
        <>
          <Header />
          <SavedGamesContainer>
            <Slide />
            <VideosContainer
              display={display}
              backgroundColor={backgroundColor}
              data-testid="savedVideos"
            >
              {savedVideos.length === 0 ? getNoSavedVideos() : getVideos()}
            </VideosContainer>
          </SavedGamesContainer>
        </>
      )
    }}
  </ContextContent.Consumer>
)

export default SavedVideos
