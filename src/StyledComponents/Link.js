import styled from 'styled-components';

export default styled.a`
  font-size: 1.1em;
  font-style: underline; 
  color: ${ props => props.green ? "#00cc99" : "white" };
  /* Text align does not work for hrefs */
  /* text-align: left;  */
`;