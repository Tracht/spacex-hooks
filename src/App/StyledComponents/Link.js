import styled from 'styled-components';

export default styled.a`
  margin-bottom: 4em; 
  font-size: 1.1em;
  /* text-decoration: underline; */
  color: ${ props => props.green ? "#00cc99" : "white" };
  /* Text align does not work for hrefs */
  text-align: center;
`;