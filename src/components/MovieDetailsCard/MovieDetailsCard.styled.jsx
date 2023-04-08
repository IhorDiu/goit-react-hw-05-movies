import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Section = styled.section`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  justify-content: center;
`;

export const MovieInfo = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  max-width: 100%;
  max-height: 50%;
`;

export const GenresList = styled.ul`
  display: flex;
  font-size: 14px;
  color: black;
  list-style-type: none;
`;

export const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;

`;



export const LinkBack = styled(NavLink)`
display: flex;
justify-content: center;
text-decoration: none;
padding: 10px 20px;
color: black;
font-weight: 500;
width: 150px;
background-color: #E6E6FA;
border-radius: 25px;

:hover {
    color: white;
    background-color: orangered;}
`;


export const LinkDetails = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;