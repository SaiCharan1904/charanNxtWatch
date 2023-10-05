import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const TrendingItemContainer = styled.li`
  display: flex;
  width: 100%;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  margin-right: 0px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 250px;
    object-fit: scale-down;
    margin-right: 20px;
  }
`
export const ThumbnailDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
export const Title = styled.p`
  font-size: 16px;
  color: ${props => props.textColor};
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 5px;
`
export const Name = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: #64748b;
`
