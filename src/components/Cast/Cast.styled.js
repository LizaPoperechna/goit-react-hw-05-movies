import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  max-width: 1100px;
  gap: 10px;
  margin-top: 20px;



`;

export const CastItem = styled.li`
    text-align: center;
    width: 160px;
    margin: 10px;
`;

export const CastImage = styled.img`
    width: 160px;
    height: 240px;
    border-radius: 14px;
    margin-bottom: 10px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        transform: scale(1.05);
}
`

export const CastInfo = styled.p` 
  font-weight: 500;
  font-size: 14px;
  margin: 0;

`
