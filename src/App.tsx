import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import esES from 'antd/es/locale/es_ES';
import { SiderApp, ContentApp } from './layout';
import { AppProvider } from './state-containers/app/AppContext';
import './App.less';
import moment from 'moment';

moment.locale('es');

const App: FC = () => (
  <AppProvider>
    <ConfigProvider locale={esES}>
      <Layout className="App">
        <Router>
          <SiderApp />
          <ContentApp />
        </Router>
      </Layout>
    </ConfigProvider>
  </AppProvider>
);

export default App;
