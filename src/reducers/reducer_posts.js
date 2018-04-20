//Used to access "_mapKeys()"
import _ from 'lodash';
//Dont need to specify file when importing from "index.js"
import { FETCH_POSTS } from '../actions';



//"_.mapKeys(VARAIBLE containing array of posts, PROPERTY we want to use as the Key)" (part of "lodash") - takes our array of objects, extracts the "id:", creates a series of objects where Key = "id:" / Value = the post
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
}
