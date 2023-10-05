import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ContextTheme from './Context/ContextTheme'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeId: '',
    savedVideos: [],
    smallSizeSlide: false,
  }

  onToggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  onclickList = () => {
    this.setState(prevState => ({
      smallSizeSlide: !prevState.smallSizeSlide,
    }))
  }

  onChangeActiveId = id => {
    this.setState({activeId: id})
  }

  addVideoData = video => {
    const {savedVideos} = this.state

    const isAvailable = savedVideos.find(eachVideo => eachVideo.id === video.id)
    console.log(isAvailable)
    console.log(savedVideos)
    if (isAvailable === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      const videos = savedVideos.filter(eachVideo => eachVideo.id !== video.id)
      this.setState({savedVideos: videos})
    }
  }

  render() {
    const {isDarkTheme, activeId, savedVideos, smallSizeSlide} = this.state

    return (
      <ContextTheme.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.onToggleTheme,
          activeId,
          changeActiveId: this.onChangeActiveId,
          savedVideos,
          addVideoData: this.addVideoData,
          smallSizeSlide,
          toToggleSlide: this.onclickList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route to="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
