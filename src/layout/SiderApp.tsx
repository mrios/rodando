import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderApp: FC = () => {
  return (
    <Sider trigger={null} collapsible collapsed={true}>
      <div className="brand">
        <div className="logo" />
        <div className="name">Rodando</div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
          Proyectos
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Contactos
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderApp;
