import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerMovieData = styled.div`
  padding: 10px 30px;
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;
  max-width: 1090px;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #ccc8c8;
  border-radius: 10px;
`;

export const Poster = styled.img`
    width: 240px;
    height: 320px;
    border: 2px solid #fff;
    border-radius: 6px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const BoxDataMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
`;

// export const ListGenres = styled.ul`
//   display: flex;
//   list-style: none;
//   gap: 10px;
// `;

export const ListLink = styled.ul`
  margin-top: 15px;
  list-style: none;
  display: flex;
  gap: 15px;
`;
export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const Link = styled(NavLink)`
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    text-align: center;
    width: 80px;
    font-weight: 500;
    color: black;
    :hover,
    :focus {
    color: blue;
    background-color: lightblue;
    }
`;