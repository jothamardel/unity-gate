import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import YearUpdate from './components/yearUpdate/yearUpdate.component';
import NameUpdate from './components/nameUpdate/nameUpdate.component';
import './App.css';

class App extends React.Component {


  render() {

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Homepage }/>
          <Route exact path='/update-year' component={ YearUpdate }/>
          <Route exact path='/update-name' component={ NameUpdate } />
        </Switch>
      </div>
    );
  }
}

export default App;
