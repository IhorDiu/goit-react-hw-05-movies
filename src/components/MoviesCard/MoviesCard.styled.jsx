import styled from 'styled-components';

export const CardWrapper = styled.li`
//   border: 1px solid black;
  border-radius: 4px;
  list-style-type: none;
  flex-basis: calc(100% / 4 - 16px);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition: all 250ms ease-in-out;
  :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px #FFFAF0,
      inset -1px -1px 2px LightGrey;
  }

  > a {
    text-decoration: none;
    color: darkgrey;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  padding-left: 16px;
`;


export const AddInfo = styled.p`
margin-top: 0;
margin-bottom: 8px;
margin-left: 8px
color: darkgrey;
padding-left: 16px;
overflow : hidden
`;



