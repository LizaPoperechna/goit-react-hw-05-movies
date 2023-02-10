import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: blue;
  }
`;