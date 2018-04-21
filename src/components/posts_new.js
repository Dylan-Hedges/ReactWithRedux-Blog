import React, { Component } from 'react';
//"reduxForm" - a helper that allows the component to communicate with the 'redux-form' reducer in the index.js reducers file -> the Redux store (similar to the Connect helper)
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    //(field) - an object that contains event handlers, tells the <Field> to display the <input>, we wire up to the JSX we are returning; {...field.input} - an object that contains event handlers and props (e.g onChange={field.input.onChange}), wires the event handlers etc. to the <input> tag under its props
    renderField(field){
        return(
            <div className="form-group">
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
    
    //<Field> - keeps track of data, knows how to interact with Redx-Form (action creators, event handlers etc.) but doesnt know how to display itself on screen; name="title" - a property what piece of state this field will produce; componment={} - shows the field on the screen, interacts directly with the user, a function that returns JSX; this.renderTitleField - we dont include () as the <Field> will call the function at some point in the future (using "()" will call it straight away)
    render() {
        return(
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

//"reduxForm" - allows component to communicate with the Redux-Form reducer; form: 'PostsNewForm' - the name for this specific form (has to be a unique string, otherwise states from other forms with the same name will merge together), sometimes we might have multiple forms on the screen at the same time (e.g sign up and sign in) this helps to isolate different forms and their states
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);