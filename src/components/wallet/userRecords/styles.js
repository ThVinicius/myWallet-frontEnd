import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 304px;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  h3 {
    font: normal 400 16px 'Raleway', cursive;
    line-height: 19px;
    color: #c6c6c6;
  }

  h4 {
    margin-left: 5px;
    font: normal 400 16px 'Raleway', cursive;
    line-height: 19px;
    color: #000000;
  }

  h5 {
    font: normal 400 16px 'Roboto', sans-serif;
    line-height: 19px;
    color: ${props => props.color};
    width: 161.8px;
    display: flex;
    justify-content: flex-end;
    word-wrap: break-word;
  }
`

export { Container }
