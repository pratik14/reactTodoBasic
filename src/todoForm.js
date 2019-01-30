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
        props.addTodo(values)
        actions.setSubmitting(false);
        actions.setValues({ name: '', completed: false })
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
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}

          <input
            type="checkbox"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            // value={props.values.completed}
            checked={props.values.completed}
            name="completed"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default TodoForm;