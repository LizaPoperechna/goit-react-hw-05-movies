import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    max-width: 1060px;

    text-align: justify;
`

export const ReviewsItem  = styled.li`
    border: 2px solid #ccc8c8;
    border-radius: 10px;
    padding: 10px 20px;
`

export const Author = styled.b`
  display: inline-block;
  margin-left: 15px;
  margin-bottom: 10px;
`;