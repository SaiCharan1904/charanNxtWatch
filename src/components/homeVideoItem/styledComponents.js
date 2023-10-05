import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 30px;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0px;
`
export const Details = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin-top: 0px;
  color: ${props => props.textColor};
`
export const Name = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: #64748b;
`
export const ViewsContainer = styled.div`
  display: flex;
`
