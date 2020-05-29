import React, { FC, useContext } from 'react';
import { AppContext } from '../context/Context';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SiderApp: FC = () => {
  const { state } = useContext(AppContext);
  return (
    <Sider trigger={null} collapsible collapsed={state.isCollapsed}>
      <div className="brand">
        <div className="logo" />
        <div className="name">Rodando</div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
          <Link to="/projects">Proyectos</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/contacts">Contactos</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderApp;
