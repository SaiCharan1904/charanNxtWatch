import styled from 'styled-components'

export const NxtWatchContainer = styled.div`
display: flex;
width: 100%
height: 130vh;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.backgroundColor};
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
