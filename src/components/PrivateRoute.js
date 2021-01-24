import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const IfUserThenRedirect = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect to="/"></Redirect>;
  } else {
    return <Route {...rest}>{children}</Route>;
  }
};

export default IfUserThenRedirect;
