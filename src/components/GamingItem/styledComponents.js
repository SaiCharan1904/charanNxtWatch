import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GameItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 20px;
  margin-bottom: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`
export const GameImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
export const GameTitle = styled.p`
  font-size: 16px;
  color: ${props => props.textColor};
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const GameWatch = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: #64748b;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
