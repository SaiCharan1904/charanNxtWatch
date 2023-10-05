import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 100vh;
  background-color: ${props => props.backgroundColor};

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
    width: 100%;
    align-items: center;
    padding-top: 10vh;
  }
`
export const SlideListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
export const SlideItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  background-color: ${props => props.backgroundItem};
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`
export const Text = styled.p`
  color: ${props => props.textColor};
  font-size: 14px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  font-weight: ${props => props.fontWeight};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding-left: 10px;
  }
`
export const ContactText = styled.p`
  color: ${props => props.textColor};
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`
export const IconElement = styled.img`
  width: 10%;
  margin-right: 10px;
`
export const Details = styled.p`
  color: ${props => props.textColor};
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
