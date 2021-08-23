import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import loadable from '@loadable/component';

const LoginForm = loadable(() => import('../containers/auth/LoginForm'));

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
