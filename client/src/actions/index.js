import { FETCH_CATEGORY, FETCH_USER, FETCH_ARTICLES } from './types';
import { _fetchArticles, _fetchArticle } from './article';

export const fetchArticles = _fetchArticles;
export const fetchArticle = _fetchArticle;
<<<<<<< HEAD
// const base = 'https://sowetoobserver.herokuapp.com';
=======
>>>>>>> 5dbeb8069b15483d2932beffb2b73b7a704b2109

export const fetchUser = () => async dispatch => {
    const res = await fetch('/auth/current-user', { credentials: 'include' });
    const data = await res.json();
    dispatch({ type: FETCH_USER, payload: data.user });
};

export const fetchCategory = () => async dispatch => {
    try {
        const res = await fetch('/api/category');
        const data = await res.json();
        //console.log("category", data);
        dispatch({ type: FETCH_CATEGORY, payload: data });
    } catch (err) {
        console.error(err)
    }
};
