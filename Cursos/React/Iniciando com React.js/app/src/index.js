import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld';

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
)

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
