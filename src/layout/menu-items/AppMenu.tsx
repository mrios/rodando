import React, { FC } from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppMenu: FC = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<VideoCameraOutlined />}>
        <Link to="/projects">Proyectos</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to="/contacts">Contactos</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
