import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import Slide from '../Slide'
import VideoDetailsSuccess from '../videoDetailsSuccess'
import ContextTheme from '../../Context/ContextTheme'

import {
  VideoContainer,
  VideoDisplayContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
} from './styledComponents'

const constantApiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'PROGRESS',
  initial: 'INITIAL',
}

class VideoDetails extends Component {
  state = {
    apiStatus: constantApiStatus.initial,
    videoDetails: [],
    activeId: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: constantApiStatus.isProgress})

    const token = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.getUpdated(data.video_details)
      this.setState({
        videoDetails: updatedData,
        apiStatus: constantApiStatus.success,
      })
    } else {
      this.setState({apiStatus: constantApiStatus.failure})
    }
  }

  getUpdated = data => ({
    channel: this.getChannelUpdated(data.channel),
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getChannelUpdated = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
    subscriberCount: channel.subscriber_count,
  })

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderFailure = isDarkTheme => {
    const failureImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    const textColor = isDarkTheme ? '#ffffff' : ' #0f0f0f'

    return (
      <FailureContainer>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureHeading textColor={textColor}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureText>
          We are having some trouble to complete your request. <br /> Please try
          again.
        </FailureText>
        <FailureButton onClick={() => this.onClickRetry()} type="button">
          Retry
        </FailureButton>
      </FailureContainer>
    )
  }

  renderProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickLike = id => {
    this.setState({activeId: id})
  }

  renderSuccess = () => {
    const {videoDetails, activeId} = this.state

    return (
      <VideoDetailsSuccess
        activeId={activeId}
        onClickLike={this.onClickLike}
        details={videoDetails}
      />
    )
  }

  renderSwitch = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case constantApiStatus.success:
        return this.renderSuccess(isDarkTheme)
      case constantApiStatus.failure:
        return this.renderFailure(isDarkTheme)
      case constantApiStatus.isProgress:
        return this.renderProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isDarkTheme, smallSizeSlide} = value

          const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const display = smallSizeSlide ? 'none' : 'flex'

          return (
            <>
              <Header />
              <VideoContainer>
                <Slide />
                <VideoDisplayContainer
                  display={display}
                  backgroundColor={backgroundColor}
                  data-testid="videoItemDetails"
                >
                  {this.renderSwitch(isDarkTheme)}
                </VideoDisplayContainer>
              </VideoContainer>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(VideoDetails)
