import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './login';
import Signup from './signup';
import User from './User';
import Admin from './Admin';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/login' component={Login} ></Route>
      <Route exact path='/User' component={User} ></Route>
      <Route exact path='/Admin' component={Admin} ></Route>
    </Switch>
  );
}

function App() {
  return (
    <div className="App">        
      <Main />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,  
  document.getElementById('root')
);