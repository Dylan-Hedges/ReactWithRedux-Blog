//"axios" - makes requests to the Redux Blog API (created by SG); "redux-promise" - handles asynchronous elements of request
import axios from 'axios';

//We define the action types here and not in the function because it is easier to change and manage
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';

//Base URL, we change the end depending on if its a GET, POST or DELETE
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//Key that we use to access the API (our specific part of the API for our posts)
const API_KEY = '?key=GOLDEN1234';

//Action creator - Fetches all posts from the API
export function fetchPosts(){
    //Executes request using the Axios library
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    //"payload: request" - assigns the request to the payload property, because of this the middleware (redux-promise) we set in "index.js" will automatically resolve this request when it sees this action, by the time the acton reaches the reducer it will contain the response from Axois (a big array of posts) 
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

//Action creator - Sends a new post to the API
export function createPost(values, callback){
    //Performs a POST request using Axios, constructs a URL using the base URL + "/posts" + the API Key and sends then sends a POST request containing the form values typed by the user; ".then(() => callback()" - once the promise has resolved, execute the callback function (passed in from post_new.js) which sends the user back to the homepage (this way it wont redirect the user until the post has been created)
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}