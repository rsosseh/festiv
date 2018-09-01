import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import RouterLayer from './RouterLayer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterLayer />, document.getElementById('root'));
registerServiceWorker();

