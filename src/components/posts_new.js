import React, { Component } from 'react';
//"reduxForm" - a helper that allows the component to communicate with the 'redux-form' reducer in the index.js reducers file -> the Redux store (similar to the Connect helper)
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    //<Field> - input that will be visible to the users; name="title" - a property what piece of state this field will produce; componment={} - a prop
    render() {
        return(
            <form>
                <Field
                    name="title"
                    componment={}
                />
            </form>
        );
    }
}

//"reduxForm" - allows component to communicate with the Redux-Form reducer; form: 'PostsNewForm' - the name for this specific form (has to be a unique string, otherwise states from other forms with the same name will merge together), sometimes we might have multiple forms on the screen at the same time (e.g sign up and sign in) this helps to isolate different forms and their states
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);