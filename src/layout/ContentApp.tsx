import React, { FC } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const ContentApp: FC = () => {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background">
        {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => console.log('clicked!'),
        })}
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
