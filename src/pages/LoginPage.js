import React, { useContext } from 'react';

import { Login, useFormState } from '../componentLibrary/login-signup';
import { Link as RouterLink } from 'react-router-dom';

//TEMP
import { UserLogin } from '../components/APIFunctions';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const formStates = useFormState();

  const linkText = "Don't have an account? Sign Up.";
  const linkTo = '/signup';

  const HandleLogin = async () => {
    if (formStates.Submit()) {
      console.log('good to go');
      formStates.setBtnLoading(true);
      const response = await UserLogin(formStates.email, formStates.password);
      formStates.setBtnLoading(false);
      console.log(response);
      if (response.status === 200) {
        setUser(response.data);
      } else {
        alert('No user');
      }
    } else {
      console.log('bad info');
    }
  };

  return (
    <Login
      formStates={formStates}
      handleSubmit={HandleLogin}
      linkComponent={RouterLink}
      linkText={linkText}
      linkTo={linkTo}
    />
  );
};

export default LoginPage;
