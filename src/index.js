import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// importing font awesome coponent and liraries
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';

// adding libraries to font awesome
fontawesome.library.add(brands, regular, solid);

// rendering
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
