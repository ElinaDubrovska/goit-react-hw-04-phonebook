import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) =>(
    <label>
    Find contact by name
    <input type="text" value={value}  onChange={onChange}/>
   </label>
);
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }