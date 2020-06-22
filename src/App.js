import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import './App.css';
import YearUpdate from './components/yearUpdate/yearUpdate.component';

class App extends React.Component {


  render() {

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Homepage }/>
          <Route exact path='/update-year' component={ YearUpdate }/>
        </Switch>
      </div>
    );
  }
}

export default App;
