import React, { useState } from 'react';
import { SignUp, useFormState } from '../componentLibrary/login-signup';
import { Link as RouterLink } from 'react-router-dom';
const SignUpPage = () => {
  const formStates = useFormState();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const linkText = 'Have an account? Login.';
  const linkTo = '/login';

  const fields = [
    {
      label: 'Name',
      state: name,
      setState: setName,
    },
    {
      label: 'Surname',
      state: surname,
      setState: setSurname,
    },
  ];

  const HandleSignUp = () => {
    if (formStates.Submit('signUp')) {
      console.log('good to go');
      formStates.setBtnLoading(true);
      setTimeout(() => {
        formStates.setBtnLoading(false);
      }, 2000);
    } else {
      console.log('bad info');
    }
  };

  return (
    <SignUp
      fields={fields}
      formStates={formStates}
      handleSubmit={HandleSignUp}
      linkText={linkText}
      linkComponent={RouterLink}
      linkTo={linkTo}
    ></SignUp>
  );
};

export default SignUpPage;
