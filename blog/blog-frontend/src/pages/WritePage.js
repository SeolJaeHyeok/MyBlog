import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';

const EditorContainer = loadable(() =>
  import('../containers/write/EditorContainer'),
);

const TagBoxContainer = loadable(() =>
  import('../containers/write/TagBoxContainer'),
);

const WriteActionButtonsContainer = loadable(() =>
  import('../containers/write/WriteActionButtonsContainer'),
);

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - Hyeok's Blog</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
