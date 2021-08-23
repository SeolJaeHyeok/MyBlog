import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import loadable from '@loadable/component';

const PostViewerContainer = loadable(() =>
  import('../containers/post/PostViewerContainer'),
);
const Postpage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default Postpage;
