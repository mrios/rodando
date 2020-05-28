import React, { FC, useContext } from 'react';
import { AppContext } from '../context/Context';
import { TOGGLE_MENU } from '../context/AppTypes';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const ContentApp: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background">
        {React.createElement(
          state.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () =>
              dispatch({ type: TOGGLE_MENU, payload: !state.isCollapsed }),
          }
        )}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  );
};

export default ContentApp;
