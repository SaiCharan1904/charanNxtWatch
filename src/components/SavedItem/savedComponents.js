import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const SavedVideoItem = styled.li`
  display: flex;
  margin-bottom: 40px;
  width: 80%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 250px;
    margin-right: 20px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`
export const Title = styled.p`
  font-size: 20px;
  color: ${props => props.textColor};
  line-height: 1.5;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`
export const Name = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: #64748b;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`
