import React from 'react';
import { Formik } from 'formik';

const TodoForm = (props) => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: '', completed: false }}
      validate={(values) => {
        let errors = {}
        if (!values.name) {
          errors.name = 'Required';
        } 
        return errors
      }}
      onSubmit={(values, actions) => {
        //random value
        values.id = Math.random().toString(36).substr(2, 9);
        props.addTodo(values)
        actions.setSubmitting(false);
        actions.resetForm()
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          <button type="submit">Submit</button>
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        </form>
      )}
    />
  </div>
);

export default TodoForm;