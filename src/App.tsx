import React, { FC } from 'react';
import { Layout } from 'antd';
import { SiderApp, ContentApp } from './layout';
import { AppProvider } from './context/Context';
import './App.less';

const App: FC = () => (
  <AppProvider>
    <Layout className="App">
      <SiderApp />
      <ContentApp />
    </Layout>
  </AppProvider>
);

export default App;
