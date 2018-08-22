import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropsValidation from './PropsValidation';
import Events from './Events';
import Translate from './Translate';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    //<PropsValidation name='Jose' age='20' height='1.75'/>,
    //<Events />,
    <Translate />,
    document.getElementById('root')
);