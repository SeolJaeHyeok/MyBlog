import React from 'react';
import ReactDOMServer from 'react-dom/server';
import client from './lib/api/client';

client.defaults.baseURL = 'http://localhost:4000';

const html = ReactDOMServer.renderToString(
  <div>Hello Server Side Rendering</div>,
);

console.log(html);
