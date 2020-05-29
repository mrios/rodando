import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { SiderApp, ContentApp } from './layout';
import { AppProvider } from './context/Context';
import './App.less';

const App: FC = () => (
  <AppProvider>
    <Layout className="App">
      <Router>
        <SiderApp />
        <ContentApp />
      </Router>
    </Layout>
  </AppProvider>
);

export default App;
