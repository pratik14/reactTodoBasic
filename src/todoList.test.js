import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoList from './todoList';


it('renders correctly', () => {
  const list = [
    { name: 'Test 1', id: 'xx', completed: false},
    { name: 'Test 2', id: 'yy', completed: false},
  ]
  const tree = renderer
    .create(<TodoList list={list} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('check if pending and completed list are rendering fine', () => {
  const list = [
    { name: 'Test 1', id: 'xx', completed: false},
    { name: 'Test 2', id: 'yy', completed: true},
  ]

  const wrapper = mount(<TodoList list={list} />);
  
  expect(wrapper.find('#pending-tasks').length).toBe(1)
  expect(wrapper.find('#completed-tasks').length).toBe(1)
})
