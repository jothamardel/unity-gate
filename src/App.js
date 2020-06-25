import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import YearUpdate from './components/yearUpdate/yearUpdate.component';
import NameUpdate from './components/nameUpdate/nameUpdate.component';
import BioUpdate from './components/bioUpdate/bioUpdate.component';
import Dashboard from './containers/dashboard/dashboard.container';
import './App.css';

class App extends React.Component {


  render() {

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Homepage }/>
          <Route exact path='/update-year' component={ YearUpdate }/>
          <Route exact path='/update-name' component={ NameUpdate } />
          <Route exact path='/update-bio' component={ BioUpdate } />
          <Route exact path='/dashboard' component={ Dashboard } />
        </Switch>
      </div>
    );
  }
}

export default App;
