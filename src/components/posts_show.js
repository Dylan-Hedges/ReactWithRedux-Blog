import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    //As soon as the component appears on screen, fetch the post
    componentDidMount() {
        //Takes post id and stores in variable - "this.props.match.params" is provided to us directly from react-router, ".match" - top level property, ".params" - an object that list all the different wildcards that exist inside the URL (e.g we might havd :id and :commentid), ".id" - specifies we only want the post id
        const { id } = this.props.match.params;
        //Executes the action creator to fetch the post and passes in the post id
        this.props.fetchPost(id);
    }
    render() {
        //Extract only the post from the components props
        const { post } = this.props;
        
        //On page load, display a loading message - checks if post exisits
        if (!post) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

//Takes the list of posts from our App level state and maps it to the props of this component, "{ posts }" - takes only the big object/list of posts from the App level state, we dont need the whole state, "ownProps" - the object ({ posts }) that is sent to the component; In large apps its not uncommon to have the "mapStateToProps()" function in a seperate file
function mapStateToProps({ posts }, ownProps) {
    //Selects & returns the post from the list of posts - Matches the posts id and returns/maps only that post to the component
    return { post: posts[ownProps.match.params.id] };
}

//Wires the action creator and executes the mapStateToProps function on this component
export default connect(mapStateToProps, { fetchPost })(PostsShow);