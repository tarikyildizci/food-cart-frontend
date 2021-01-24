import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginPage, SignUpPage, Home, Restaurant, Cart } from './pages';

import IfUserThenRedirect from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <IfUserThenRedirect exact path="/login">
          <LoginPage />
        </IfUserThenRedirect>
        <IfUserThenRedirect exact path="/signup">
          <SignUpPage />
        </IfUserThenRedirect>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/:restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
