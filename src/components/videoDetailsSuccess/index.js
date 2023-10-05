import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ContextTheme from '../../Context/ContextTheme'

import {
  VideoDetailsContainer,
  VideoTitle,
  ViewContainer,
  Name,
  SavedContainer,
  LikeButton,
  LikeText,
  SaveButton,
  HrLine,
  ProfileContainer,
  ProfileLogo,
  ProfileDetailsContainer,
  ProfileText,
  Description,
  ReactVideoPlayer,
  DescriptionContent,
} from './styledComponents'

const VideoDetailsSuccess = props => {
  const {details, onClickLike, activeId} = props

  const {
    channel,
    description,
    id,
    publishedAt,
    title,
    videoUrl,
    viewCount,
  } = details
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <ContextTheme.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addVideoData, smallSizeSlide} = value
        const Published = formatDistanceToNow(new Date(publishedAt))
        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'

        const isSaved = savedVideos.find(eachList => eachList.id === id)

        const clickLike = likeId => {
          onClickLike(likeId)
        }

        const clickSaved = () => {
          addVideoData(details)
        }

        const display = smallSizeSlide ? 'none' : ''

        return (
          <VideoDetailsContainer>
            <ReactVideoPlayer>
              <ReactPlayer url={videoUrl} width="100%" height="100%" />
            </ReactVideoPlayer>
            <VideoTitle textColor={textColor}>{title}</VideoTitle>
            <ViewContainer>
              <Name>
                {viewCount} views . {Published}
              </Name>
              <SavedContainer>
                <LikeButton
                  color={activeId === 'like' ? '#2563eb' : '#64748b'}
                  onClick={() => clickLike('like')}
                >
                  <BiLike size={20} />
                  <LikeText>Like</LikeText>
                </LikeButton>
                <LikeButton
                  color={activeId === 'dislike' ? '#2563eb' : '#64748b'}
                  onClick={() => clickLike('dislike')}
                >
                  <BiDislike size={20} />
                  <LikeText>Dislike</LikeText>
                </LikeButton>
                <SaveButton
                  saveColor={isSaved !== undefined ? '#2563eb' : '#64748b'}
                  onClick={() => clickSaved()}
                >
                  <MdPlaylistAdd size={20} />
                  <LikeText>
                    {isSaved !== undefined ? 'Saved' : 'Save'}
                  </LikeText>
                </SaveButton>
              </SavedContainer>
            </ViewContainer>
            <HrLine />
            <ProfileContainer>
              <ProfileLogo src={profileImageUrl} alt="channel logo" />
              <ProfileDetailsContainer>
                <ProfileText textColor={textColor}>{name}</ProfileText>
                <Name>{`${subscriberCount} subscribers`}</Name>
                <Description display={display}>{description}</Description>
              </ProfileDetailsContainer>
            </ProfileContainer>
            <DescriptionContent>{description}</DescriptionContent>
          </VideoDetailsContainer>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default VideoDetailsSuccess
