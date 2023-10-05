import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`
export const ReactVideoPlayer = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 30%;
  }
`

export const VideoTitle = styled.p`
  font-size: 16px;
  color: ${props => props.textColor};
  line-height: 1.6;
`
export const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Name = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: #64748b;
`
export const LikeButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
  margin-right: 16px;
  cursor: pointer;
`
export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  border: none;
  outline: none;
  color: ${props => props.saveColor};
  cursor: pointer;
`

export const SavedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0px;
`
export const LikeText = styled.p`
  font-size: 12px;
  margin-left: 3px;
  color: ${props => props.saveColor};
`
export const HrLine = styled.hr`
  border: 1px solid #64748b;
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const ProfileLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileText = styled.p`
  font-size: 14px;
  color: ${props => props.textColor};
  margin-top: 0px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const DescriptionContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
