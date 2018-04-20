import React, { Component } from 'react';
//Allows us to wire our component <-> action creator (fetches list of posts)
import { connect } from 'react-redux';
//Imports fetchPosts action creator
import { fetchPosts } from '../actions';

//"componentDidMount()" - a lifecycle method, React will automatically execute whatever is inside this method as soon as component is rendered on screen, fetching data is asynchronous (takes time to respond) and there is no way to tell React to hold off rendering components (it will render components as quickly as possible) so it doesnt matter if the request is executed before or after rendering
class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

//Wires our component <-> action creator - instead of passing in "mapStateToProps" we pass in the Action Creator directly (it is the same, however sometimes we do need to break it out), So far when we want to wire our Action Creator to a component we used "mapStateToProps()" (so we can call it off the props object)
export default connect (null, { fetchPosts: fetchPosts } )(PostsIndex);