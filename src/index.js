import './wdyr';

import React from 'react';
import { render } from 'react-dom';
import App from './App';

// FirebasContext
import FirebaseContext from './context/firebase';
// FirebasLib
import { firebase, FieldValue } from './lib/firebase';
// Tailwind config
import './index.css';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
