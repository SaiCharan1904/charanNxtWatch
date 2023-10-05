import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ContextTheme from '../../Context/ContextTheme'

import {
  SlideContainer,
  NavLink,
  SlideListContainer,
  SlideItem,
  Text,
  ContactContainer,
  ContactText,
  IconsContainer,
  IconElement,
  Details,
} from './styledComponents'

const Slide = () => (
  <ContextTheme.Consumer>
    {value => {
      const {
        isDarkTheme,
        activeId,
        changeActiveId,
        smallSizeSlide,
        toToggleSlide,
      } = value

      const onChangeId = id => {
        changeActiveId(id)
        toToggleSlide()
      }

      const display = smallSizeSlide ? 'flex' : 'none'

      const backgroundColor = isDarkTheme ? '#212121' : ''
      const textColor = isDarkTheme ? '#ffffff' : '#0f0f0f'
      const itemBackground = isDarkTheme ? '#606060' : '#d7dfe9'

      return (
        <SlideContainer display={display} backgroundColor={backgroundColor}>
          <SlideListContainer>
            <NavLink to="/">
              <SlideItem
                backgroundItem={activeId === 'home' ? itemBackground : ''}
                onClick={() => onChangeId('home')}
              >
                <AiFillHome
                  size={20}
                  color={activeId === 'home' ? '#ff0000' : '#616e7c'}
                />
                <Text
                  fontWeight={activeId === 'home' ? '500' : ''}
                  textColor={textColor}
                >
                  Home
                </Text>
              </SlideItem>
            </NavLink>
            <NavLink to="/trending">
              <SlideItem
                backgroundItem={activeId === 'trending' ? itemBackground : ''}
                onClick={() => onChangeId('trending')}
              >
                <HiFire
                  size={20}
                  color={activeId === 'trending' ? '#ff0000' : '#616e7c'}
                />
                <Text
                  fontWeight={activeId === 'trending' ? '500' : ''}
                  textColor={textColor}
                >
                  Trending
                </Text>
              </SlideItem>
            </NavLink>
            <NavLink to="/gaming">
              <SlideItem
                backgroundItem={activeId === 'gaming' ? itemBackground : ''}
                onClick={() => onChangeId('gaming')}
              >
                <SiYoutubegaming
                  size={20}
                  color={activeId === 'gaming' ? '#ff0000' : '#616e7c'}
                />
                <Text
                  fontWeight={activeId === 'gaming' ? '500' : ''}
                  textColor={textColor}
                >
                  Gaming
                </Text>
              </SlideItem>
            </NavLink>
            <NavLink to="/saved-videos">
              <SlideItem
                backgroundItem={
                  activeId === 'savedVideos' ? itemBackground : ''
                }
                onClick={() => onChangeId('savedVideos')}
              >
                <MdPlaylistAdd
                  size={20}
                  color={activeId === 'savedVideos' ? '#ff0000' : '#616e7c'}
                />
                <Text
                  fontWeight={activeId === 'savedVideos' ? '500' : ''}
                  textColor={textColor}
                >
                  Saved videos
                </Text>
              </SlideItem>
            </NavLink>
          </SlideListContainer>
          <ContactContainer>
            <ContactText textColor={textColor}>CONTACT US</ContactText>
            <IconsContainer>
              <IconElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <IconElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <IconElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </IconsContainer>
            <Details textColor={textColor}>
              Enjoy! Now to see your <br /> channels and <br /> recommendations!
            </Details>
          </ContactContainer>
        </SlideContainer>
      )
    }}
  </ContextTheme.Consumer>
)

export default Slide
