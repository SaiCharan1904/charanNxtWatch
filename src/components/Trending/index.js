import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ContextTheme from '../../Context/ContextTheme'
import Header from '../Header'
import Slide from '../Slide'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingContainer,
  TrendingDisplayContainer,
  HeaderContainer,
  IconContainer,
  HeaderText,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
  TrendingListContainer,
} from './styledComponents'

const constantApiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: constantApiStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: constantApiStatus.isProgress})

    const token = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.videos.map(eachData => this.getUpdated(eachData))
      this.setState({
        trendingVideosList: fetchedData,
        apiStatus: constantApiStatus.success,
      })
    } else {
      this.setState({apiStatus: constantApiStatus.failure})
    }
  }

  getUpdated = data => ({
    channel: this.getChannelUpdated(data.channel),
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getChannelUpdated = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  })

  onClickRetry = () => {
    this.getTrendingVideos()
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

  renderSuccess = isDarkTheme => {
    const {trendingVideosList} = this.state

    const headerBackground = isDarkTheme ? '#383838' : '#f1f5f9'
    const headerTextColor = isDarkTheme ? '#ffffff' : '#1e293b'
    const IconBg = isDarkTheme ? '#0f0f0f' : '#94a3b8'

    return (
      <>
        <HeaderContainer
          data-testid="banner"
          headerBackground={headerBackground}
        >
          <IconContainer IconBg={IconBg}>
            <HiFire size={30} color="#ff0000" />
          </IconContainer>
          <HeaderText headerTextColor={headerTextColor}>Trending</HeaderText>
        </HeaderContainer>
        <TrendingListContainer>
          {trendingVideosList.map(eachList => (
            <TrendingVideoItem key={eachList.id} details={eachList} />
          ))}
        </TrendingListContainer>
      </>
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
              <TrendingContainer>
                <Slide />
                <TrendingDisplayContainer
                  display={display}
                  backgroundColor={backgroundColor}
                  data-testid="trending"
                >
                  {this.renderSwitch(isDarkTheme)}
                </TrendingDisplayContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Trending
