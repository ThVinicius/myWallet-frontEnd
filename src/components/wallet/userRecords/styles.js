import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 304px;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  h3 {
    font: normal 400 16px 'Raleway', cursive;
    line-height: 19px;
    color: #c6c6c6;
  }

  h4 {
    font: normal 400 16px 'Raleway', cursive;
    line-height: 19px;
    color: #000000;
    cursor: pointer;
  }

  h5 {
    font: normal 400 16px 'Roboto', sans-serif;
    line-height: 19px;
    color: ${props => props.color};
    /* width: 161.8px; */
    display: flex;
    justify-content: flex-end;
    word-wrap: break-word;
  }

  h6 {
    font: normal 400 16px 'Raleway', cursive;
    cursor: pointer;
  }

  h6:hover {
    color: #c70000;
    font-size: 24px;
  }

  @media (max-width: 420px) {
    & {
      width: 87.4vw;
    }
  }
`

export { Container }
