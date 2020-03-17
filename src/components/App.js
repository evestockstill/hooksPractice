import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let NewText = () => {
  let [newText, setNewText] = useState('Write Something');

  return (
    <div>
      <div>wow this is cool</div>
      <input
        type='text'
        onChange={e => {
          setNewText(e.target.value);
        }}
      />
      <div>{newText}</div>
    </div>
  );
};

export default NewText;
