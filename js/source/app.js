'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>
      <Logo/>Welcome to Whinepad!
    </h1>
  </div>,
  document.getElementById('pad')
);
