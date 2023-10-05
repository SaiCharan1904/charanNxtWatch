import styled from 'styled-components'

export const NxtWatchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.backgroundColor};
  width: 100%;

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
  }
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  padding: 30px;
  width: 100%;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`
export const WebsiteImage = styled.img`
  width: 40%;
`
export const PurchaseDetails = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #0f0f0f;
`
export const GetNowButton = styled.button`
  border: 1px solid #0f0f0f;
  background: transparent;
  outline: none;
  padding: 8px 16px;
  color: #0f0f0f;
  margin-top: 10px;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  overflow-y: scroll;

  height: 100vh;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border: 1px solid #7e858e;
  border-radius: 4px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const InputElement = styled.input`
  outline: none;
  border: none;
  border-right: 1px solid #7e858e;
  padding-left: 10px;
  color: #7e858e;
  width: 90%;
  height: 30px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${props => props.SearchInputBg};
`
export const SearchButton = styled.button`
  padding: 6px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 30px;
  background-color: ${props => props.buttonBg};
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
export const FailureButton = styled.button`
  padding: 8px 24px;
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  cursor: pointer;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
`
