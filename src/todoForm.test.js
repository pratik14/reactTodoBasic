import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoForm from './todoForm';


it('renders correctly', () => {
  const tree = renderer
    .create(<TodoForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call onSubmitAction on submit', () => {
  const onSubmitSpy = jest.fn();

  const wrapper = mount(<TodoForm onSubmitAction={onSubmitSpy} />);
  wrapper.find('input').simulate('change', { target: { name: 'name', value: 'Abcd' } })
  wrapper.find('#submitButton').simulate('submit');

  setTimeout(() => {
    expect(onSubmitSpy).toHaveBeenCalled();
  }, 1000);
})
