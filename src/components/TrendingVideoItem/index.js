import {formatDistanceToNow} from 'date-fns'

import ContextTheme from '../../Context/ContextTheme'

import {
  TrendingItemContainer,
  ThumbnailImage,
  ThumbnailDetailsContainer,
  Title,
  Name,
  LinkItem,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {details} = props

  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name} = channel

  return (
    <ContextTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const Published = formatDistanceToNow(new Date(publishedAt))

        return (
          <LinkItem to={`/videos/${id}`}>
            <TrendingItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailDetailsContainer>
                <Title textColor={textColor}>{title}</Title>
                <Name>{name}</Name>
                <Name>
                  {viewCount} views . {Published}
                </Name>
              </ThumbnailDetailsContainer>
            </TrendingItemContainer>
          </LinkItem>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default TrendingVideoItem
