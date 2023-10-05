import React from 'react'

const ContextTheme = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  changeActiveId: () => {},
  activeId: '',
  savedVideos: [],
  addVideoData: () => {},
  smallSizeSlide: false,
  toToggleSlide: () => {},
})

export default ContextTheme
