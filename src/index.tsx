import React from 'react';
import ReactDOM from 'react-dom';

import { register as serviceWorkerRegister } from '@/services/serviceWorkerService';
import logo from '@/assets/images/logo.svg';

const App: React.FC = () => <img src={logo} alt="logo" />;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegister();
