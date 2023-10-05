import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import ContextTheme from '../../Context/ContextTheme'
import Slide from '../Slide'
import VideoItem from '../homeVideoItem'

import {
  NxtWatchContainer,
  DisplayContainer,
  BannerContainer,
  BannerTextContainer,
  WebsiteImage,
  PurchaseDetails,
  GetNowButton,
  VideosContainer,
  SearchContainer,
  FailureContainer,
  InputElement,
  SearchButton,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
  VideosListContainer,
  CloseButton,
} from './styledComponents'

const constantApiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    apiStatus: constantApiStatus.initial,
    videosList: [],
    toDisplay: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: constantApiStatus.isProgress})

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.videos.map(eachData => this.getUpdated(eachData))
      this.setState({
        videosList: fetchedData,
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

  onClickClose = () => {
    this.setState({toDisplay: false})
  }

  getBanner = display => (
    <BannerContainer display={display} data-testid="banner">
      <BannerTextContainer>
        <WebsiteImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PurchaseDetails>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PurchaseDetails>
        <GetNowButton>GET IT NOW</GetNowButton>
      </BannerTextContainer>
      <CloseButton data-testid="close" onClick={() => this.onClickClose()}>
        <AiOutlineClose size={20} />
      </CloseButton>
    </BannerContainer>
  )

  setSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickKeyDown = event => {
    if (event.key === 'Enter') {
      this.getVideosList()
    }
  }

  onClickSearchButton = () => {
    this.getVideosList()
  }

  getSearch = isDarkTheme => {
    const SearchInputBg = isDarkTheme ? 'transparent' : ''
    const buttonBg = isDarkTheme ? '#212121' : ''

    return (
      <SearchContainer>
        <InputElement
          SearchInputBg={SearchInputBg}
          type="search"
          placeholder="Search"
          onChange={this.setSearch}
          onKeyDown={this.onClickKeyDown}
        />
        <SearchButton
          onClick={this.onClickSearchButton}
          buttonBg={buttonBg}
          type="button"
          data-testid="searchButton"
        >
          <AiOutlineSearch size={16} color="#7e858e" />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderSuccess = isDarkTheme => {
    const {videosList} = this.state
    const textColor = isDarkTheme ? '#ffffff' : ' #0f0f0f'

    if (videosList.length === 0) {
      return (
        <FailureContainer>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureHeading textColor={textColor}>
            No Search results found
          </FailureHeading>
          <FailureText>
            Try different key words or remove search filter
          </FailureText>
          <FailureButton onClick={() => this.onClickRetry()} type="button">
            Retry
          </FailureButton>
        </FailureContainer>
      )
    }
    return (
      <VideosListContainer>
        {videosList.map(eachList => (
          <VideoItem key={eachList.id} details={eachList} />
        ))}
      </VideosListContainer>
    )
  }

  onClickRetry = () => {
    this.getVideosList()
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
    const {toDisplay} = this.state

    return (
      <ContextTheme.Consumer>
        {value => {
          const {isDarkTheme, smallSizeSlide} = value

          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = smallSizeSlide ? 'none' : 'flex'

          return (
            <>
              <Header />
              <NxtWatchContainer>
                <Slide />
                <DisplayContainer
                  backgroundColor={backgroundColor}
                  data-testid="home"
                  display={display}
                >
                  {toDisplay && this.getBanner(display)}
                  <VideosContainer>
                    {this.getSearch(isDarkTheme)}
                    {this.renderSwitch(isDarkTheme)}
                  </VideosContainer>
                </DisplayContainer>
              </NxtWatchContainer>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Home
