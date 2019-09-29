import React from 'react';
import {render} from 'react-snapshot';
/*import { render } from 'react-dom';*/
import App from './App';
import './index.css';
/*import {Router, Route, browserHistory, IndexRoute} from 'react-router-dom';*/
import {  BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import {Index, Login, Admin, FourOhFour} from './pages';

import About from './About';
/*import loadable from '@loadable/component';*/
/*const About = loadable(() => import('./About'));*/
/*import asyncComponent from './AsyncComponent';*/
/*const App = asyncComponent(() => import('./App'));*/
/*const {Index, Login, About, Admin, FourOhFour} = asyncComponent(() => import('./pages'));*/

import { Provider } from 'mobx-react';
import Stores from './stores';


render(
    <Provider {...Stores}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route component={FourOhFour}/>
                </Switch>
            </App>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
