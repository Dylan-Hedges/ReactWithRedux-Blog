//"axios" - makes requests to the Redux Blog API (created by SG); "redux-promise" - handles asynchronous elements of request
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

//Base URL, we change the end depending on if its a GET, POST or DELETE
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//Key that we use to access the API
const API_KEY = '?key=GOLDEN1234';


export function fetchPosts(){
    //Executes request using the Axios library
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    
    //"payload: request" - assigns the request to the payload property, because of this the middleware (redux-promise) we set in "index.js" will automatically resolve this request when it sees this action, by the time the acton reaches the reducer it will contain the response from Axois (a big array of posts) 
    return{
        type: FETCH_POSTS,
        payload: request
    };
}