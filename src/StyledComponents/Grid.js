import styled from 'styled-components';

// SOURCE
// https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480


// We don’t need a Grid but it allows us to keep our rows & columns 
// nicely contained and it means we can add a border later to see things better.
export const Grid = styled.div`

`;

// Having a display of "flex" allows all children of the Row component to use 
// certain flex properties. It also applies some default styles. In our case, 
// all children of Row will be Col components, which are divs. 
// The "display: flex" property on Row will make them all sit side-by-side 
// as if they each have a display of inline-block.
export const Row = styled.div`
  display: flex;
`;

// use "@media" and 'collapse' to make certain columns to disappear on smaller screens
const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
}

export const Col = styled.div`
  /* flex: ${(props) => props.size}; */
  flex: 1;
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)}
`;