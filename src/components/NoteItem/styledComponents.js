import styled from 'styled-components'

export const EachItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid #cbd5e1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 170px;
    margin: 0px 8px 24px 8px;
  }
`
export const EachTitle = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 1.33;
`
export const EachNote = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  margin-top: 16px;
  line-height: 24px;
`
