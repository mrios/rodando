import React, { FC } from 'react';
import { Layout } from 'antd';
import { SiderApp, ContentApp } from './layout';
import './App.less';

const App: FC = () => (
  <Layout className="App">
    <SiderApp />
    <ContentApp />
  </Layout>
);

export default App;
