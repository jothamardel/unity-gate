import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import './App.css';

class App extends React.Component {


  render() {

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Homepage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
