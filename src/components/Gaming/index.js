import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ContextTheme from '../../Context/ContextTheme'
import Header from '../Header'
import Slide from '../Slide'
import GamingItem from '../GamingItem'

import {
  GamingContainer,
  GamingDisplayContainer,
  HeaderContainer,
  IconContainer,
  HeaderText,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
  GamingListContainer,
} from './styledComponents'

const constantApiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: constantApiStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: constantApiStatus.isProgress})

    const token = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
      console.log(fetchedData)
      this.setState({
        gamingVideosList: fetchedData,
        apiStatus: constantApiStatus.success,
      })
    } else {
      this.setState({apiStatus: constantApiStatus.failure})
    }
  }

  getUpdated = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
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
    const {gamingVideosList} = this.state

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
            <SiYoutubegaming size={30} color="#ff0000" />
          </IconContainer>
          <HeaderText headerTextColor={headerTextColor}>Gaming</HeaderText>
        </HeaderContainer>
        <GamingListContainer>
          {gamingVideosList.map(eachList => (
            <GamingItem key={eachList.id} details={eachList} />
          ))}
        </GamingListContainer>
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
              <GamingContainer>
                <Slide />
                <GamingDisplayContainer
                  display={display}
                  backgroundColor={backgroundColor}
                  data-testid="gaming"
                >
                  {this.renderSwitch(isDarkTheme)}
                </GamingDisplayContainer>
              </GamingContainer>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Gaming
