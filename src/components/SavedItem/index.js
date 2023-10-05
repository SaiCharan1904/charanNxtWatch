import {formatDistanceToNow} from 'date-fns'
import ContextTheme from '../../Context/ContextTheme'

import {
  SavedVideoItem,
  ThumbnailImage,
  DetailsContainer,
  Title,
  Name,
  NavLink,
} from './savedComponents'

const SavedItem = props => {
  const {details} = props

  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name} = channel
  const Published = formatDistanceToNow(new Date(publishedAt))

  return (
    <ContextTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'

        return (
          <NavLink to={`/videos/${id}`}>
            <SavedVideoItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <Title textColor={textColor}>{title}</Title>
                <Name>{name}</Name>
                <Name>
                  {viewCount} views . {Published}
                </Name>
              </DetailsContainer>
            </SavedVideoItem>
          </NavLink>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default SavedItem
