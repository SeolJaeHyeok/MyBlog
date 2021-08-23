import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import loadable from '@loadable/component';

const RegisterForm = loadable(() => import('../containers/auth/RegisterForm'));

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
