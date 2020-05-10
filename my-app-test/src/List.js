import React from 'react';

import './App.css';
import PropTypes from 'prop-types';
import Increament from './Increment';
import ContextExample from './ContextExample'
import RefExample from './RefExample'
import RenderPropsExample from './RenderPropsExample'

function List(props) {
 const { items } = props;
 if (!items.length) {
 // No Items on the list, render an empty message
 return <span className="empty-message">No items in list</span>;
 }
 
 return (
   //  <ul className="list-items">
   //      {items.map(item => <li key={item} className="item">{item}</li>)}

   //      <Increament/>
   //      <ContextExample/>
   //      <RefExample/>
        
   //  </ul>
   <RenderPropsExample />
    
    );
}
 
 List.propTypes = {
    items: PropTypes.array,
 };
 List.defaultProps = {
    items: [1,2,3],
 };
 export default List;
   
