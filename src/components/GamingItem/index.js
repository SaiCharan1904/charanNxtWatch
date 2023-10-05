import ContextTheme from '../../Context/ContextTheme'

import {
  GameItemContainer,
  GameImage,
  GameTitle,
  GameWatch,
  LinkItem,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props

  const {id, thumbnailUrl, title, viewCount} = details

  return (
    <ContextTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'

        return (
          <GameItemContainer>
            <LinkItem to={`/videos/${id}`}>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle textColor={textColor}>{title}</GameTitle>
              <GameWatch>{viewCount} Watching Worldwide</GameWatch>
            </LinkItem>
          </GameItemContainer>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default VideoItem
