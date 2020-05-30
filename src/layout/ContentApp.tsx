import React, { FC, useContext } from 'react';
import { AppContext } from '../context/Context';
import { TOGGLE_MENU } from '../context/AppTypes';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const ContentApp: FC = (props) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background site-header">
        {React.createElement(
          state.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger-menu',
            onClick: () =>
              dispatch({
                type: TOGGLE_MENU,
                payload: !state.isCollapsed,
              }),
          }
        )}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: '100vh',
        }}
      >
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
              routes={route.routes}
            />
          ))}
        </Switch>
      </Content>
    </Layout>
  );
};

export default ContentApp;
