import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const Input = styled.input`
    border: 0;
    border-radius: 4px;
    background: lightblue;
    outline: none;
    height: 46px;
    width: 400px;
    padding: 0px 10px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    margin-right: 15px;
`

export const SearchButton = styled.button`
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    text-align: center;
    height: 46px;
    width: 100px;
    font-size: 18px;
    font-weight: 500;
    color: black;
    :hover,
    :focus {
        color: blue;
        background-color: lightblue;
    }
`;