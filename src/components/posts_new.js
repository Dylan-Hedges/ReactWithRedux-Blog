import React, { Component } from 'react';
//"reduxForm" - only handles state and validation for our form (does not help to save data to the DB or making a POST request), we have to do that), a helper that allows the component to communicate with the 'redux-form' reducer in the index.js reducers file -> the Redux store (similar to the Connect helper)
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    //(field) - an object that contains event handlers, tells the <Field> to display the <input>, we wire up to the JSX we are returning; {...field.input} - an object that contains event handlers and props (e.g onChange={field.input.onChange}), wires the event handlers etc. to the <input> tag under its props; "{field.meta.error}" - displays errors to users
    renderField(field){
        return(
            <div className="form-group">
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }
    
    onSubmit(values) {
        console.log(values);
    }
    
    //<Field> - keeps track of data, knows how to interact with Redx-Form (action creators, event handlers etc.) but doesnt know how to display itself on screen; name="title" - a property what piece of state this field will produce; componment={} - shows the field on the screen, interacts directly with the user, a function that returns JSX; this.renderTitleField - we dont include () as the <Field> will call the function at some point in the future (using "()" will call it straight away)
    render() {
        //Performs Redux-Form validation checks - Pulls off the "handleSubmit" function that was passed into the component from Redux-Form (when we did "export default reduxForm")
        const { handleSubmit } = this.props;
        
        //"onSubmit" - when the form is submitted; "handleSubmit" - Redux-Form performs validation checks; "this.onSubmit.bind(this)" - then execute the function we defined
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

//validate() - a function that checks form is complete and has valid input (all fields are filled out), when user tries to submit the form this function will execute; "(values)" = the values the user has entered (e.g title: 'New Post', categories: '', content'asdsadas')
function validate(values){
    //Creates the errors object - if we return an empty object Redux-Form assumes nothing is wrong with form and its fine to submit; if we return an object with something inside it Redux-Form will assume there is an issue and not submit the form
    const errors ={};
    
    //If the user did not enter a title (can add additonal validation here e.g "|| values.title.length < 3")
    if (!values.title) {
        //add a property called title to the errors object, once this gets added and then returned Redux-Form will know there is an issue with the form and not submit
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content";
    }
    
    //Returns error object - returns either an empty object (form has no errors -> submit) or an object containing properties (form has errors -> dont submit)
    return errors;
}

//"reduxForm" - allows component to communicate with the Redux-Form reducer, also adds loads of additonal properties that are passed to our component (e.g pulling off "handleSubmit"); form: 'PostsNewForm' - the name for this specific form (has to be a unique string, otherwise states from other forms with the same name will merge together), sometimes we might have multiple forms on the screen at the same time (e.g sign up and sign in) this helps to isolate different forms and their states
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);