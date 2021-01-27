import React from 'react';
import ReactDOM from 'react-dom';

import logo from '@/assets/images/logo.svg';

const App: React.FC = () => <img src={logo} alt="logo" />;

ReactDOM.render(<App />, document.getElementById('root'));
