export const URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'c25450473e1297d275a0ebc0c587a230';


export const getTrending = async () => {
    const responce = await fetch(`${URL}trending/movie/day?api_key=${API_KEY}`);
    return await responce.json();
}

export const getMovieSearch = async (query) => {
    const responce = await fetch(`${URL}search/movie?api_key=${API_KEY}&page=1&query=${query}`);
    return await responce.json();
}

export const getMovieById = async (id) => {
    const responce = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
    return await responce.json();
}

export const getMovieCastById = async (id) => {
    const responce = await fetch(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
    return await responce.json();
}

export const getMovieReviewsById = async (id) => {
    const responce = await fetch(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    return await responce.json();
}