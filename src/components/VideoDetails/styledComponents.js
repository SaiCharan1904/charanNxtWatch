import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const VideoDisplayContainer = styled.div`
  display: flex;
  width: 100%;
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
export const FailureButton = styled.button`
  padding: 8px 24px;
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  cursor: pointer;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
