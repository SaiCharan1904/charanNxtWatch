import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const TrendingDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => props.backgroundColor};

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
  }
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
export const TrendingListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-right: 30px;
`
