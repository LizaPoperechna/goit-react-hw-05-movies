import { useState } from "react";
import { Form, Input, SearchButton } from "./SearchForm.styled";

export const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    const handleChange = e => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type='text'
                    name='query' 
                    placeholder="Put movie name" 
                    autoFocus 
                    autoComplete="off"
                    onChange={handleChange}
                    value={searchQuery}>
                 </Input>
                <SearchButton>Search</SearchButton>
            </Form>
        </>
    )

};

