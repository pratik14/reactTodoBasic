import React from 'react';
import { Formik } from 'formik';

const TodoForm = (props) => {
  const { name, completed, id } = props;
  return(
    <div>
      <Formik
        initialValues={{ 
          name: name || '', 
          completed: completed || false, 
          id: id || Math.random().toString(36).substr(2, 9)
        }}
        validate={(values) => {
          let errors = {}
          if (!values.name) {
            errors.name = 'Required';
          } 
          return errors
        }}
        onSubmit={(values, actions) => {
          props.onSubmitAction(values)
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
            {props.errors.name && <p className="error">{props.errors.name}</p>}
          </form>
        )}
      />
    </div>
    )
}

export default TodoForm;