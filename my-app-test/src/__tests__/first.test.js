
//test with only jest 
// var one = ['Ali', 'Reza', 'Mohammad'];
// var two = ['Ali', 'Reza', 'Mohammad'];
// test('testing sum', () => {
//     expect(one).toEqual(two);
// });



//import Enzyme, { configure, shallow } from 'enzyme';

import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import List from '../List';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('List tests', () => {
 it('renders list-items', () => {
 const items = ['one', 'two', 'three'];
 const wrapper = shallow(<List items={items} />);
 // Expect the wrapper object to be defined
 expect(wrapper.find('.list-items')).toBeDefined();
 expect(wrapper.find('.item')).toHaveLength(items.length);
 });
 });