import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

const LoginPage = loadable(() =>
  import(/* webpackChunkName: "LoginPage" */ './pages/LoginPage'),
);
const PostListPage = loadable(() =>
  import(/* webpackChunkName: "PostListPage" */ './pages/PostListPage'),
);
const PostPage = loadable(() =>
  import(/* webpackChunkName: "PostPage" */ './pages/PostPage'),
);
const RegisterPage = loadable(() =>
  import(/* webpackChunkName: "RegisterPage" */ './pages/RegisterPage'),
);
const WritePage = loadable(() =>
  import(/* webpackChunkName: "WritePage" */ './pages/WritePage'),
);

function App() {
  return (
    <>
      <Helmet>
        <title>Hyeok's Blog</title>
      </Helmet>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
    </>
  );
}

export default App;
