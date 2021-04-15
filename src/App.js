import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './pages/Main.js';
import NewPortal from './pages/components/NewPortal.js';
import OldPortal from './pages/components/OldPortal.js';
import ErrorPage from './pages/Error.js';


export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path ='/newportal' component={NewPortal} />
          <Route exact path ='/newportal' component={OldPortal} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}
