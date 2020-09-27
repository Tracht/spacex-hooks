import styled from 'styled-components'

export const HomepageDiv = styled.div`
  /* background-color: #282c34; */
  min-height: 100vh;
  /* align-items: center; */
  justify-content: center;
  color: white;

  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  
`

export const HomepageText = styled.p`
  font-size: 0.9em;
  text-align: ${ props => props.left ? "left" : "center" };
  color: white;
  font-family: 'Open Sans', sans-serif;
`