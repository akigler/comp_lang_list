import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>wecome {props.name}</h1>
}

ReactDOM.render(Welcome, document.getElementById('root'));
