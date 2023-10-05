import styled from 'styled-components'

export const SavedGamesContainer = styled.div`
  display: flex;
  height: 130vh;
  width: 100%;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => props.backgroundColor};

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 20px;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-size: 24px;
  color: ${props => props.textColor};
`
export const FailureText = styled.p`
  font-size: 16px;
  color: #94a3b8;
  text-align: center;
  line-height: 1.7;
  margin-top: 2px;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.headerBackground};
  min-height: 16vh;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    min-height: 10vh;
    padding-left: 20px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.IconBg};
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`
export const HeaderText = styled.h1`
  font-size: 28px;
  color: ${props => props.headerTextColor};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  list-style-type: none;
  padding-left: 20px;
`
