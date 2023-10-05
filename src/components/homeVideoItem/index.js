import {formatDistanceToNow} from 'date-fns'
import ContextTheme from '../../Context/ContextTheme'

import {
  ItemContainer,
  ThumbnailContainer,
  Thumbnail,
  ProfileImage,
  DetailsContainer,
  Details,
  Name,
  LinkItem,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props

  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel

  return (
    <ContextTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const Published = formatDistanceToNow(new Date(publishedAt))

        return (
          <ItemContainer>
            <LinkItem to={`/videos/${id}`}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <DetailsContainer>
                  <Details textColor={textColor}>{title}</Details>
                  <Name>{name}</Name>
                  <Name>
                    {viewCount} views . {Published}
                  </Name>
                </DetailsContainer>
              </ThumbnailContainer>
            </LinkItem>
          </ItemContainer>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default VideoItem
