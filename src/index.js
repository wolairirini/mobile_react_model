import React from 'react';
import ReactDOM from 'react-dom';
import "./components/flex";
import "./index.less";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// 全局axios设置
axios.defaults.baseURL = window.location.origin;





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

