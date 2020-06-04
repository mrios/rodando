import React, { FC } from 'react';
import { Menu, Card } from 'antd';
import {
  UserOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import useProject from '../../hooks/useProject';

const { Meta } = Card;

const ProjectMenu: FC<{ isCollapsed: boolean }> = (props) => {
  let { url } = useRouteMatch();
  const [project] = useProject();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
      {!props.isCollapsed && project.profileImage ? (
        <Menu.Item
          key="1"
          style={{
            height: 140,
            paddingRight: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 0,
          }}
        >
          <img
            alt={project.name}
            width="200"
            src={(project.profileImage && project.profileImage.url) || ''}
          />
        </Menu.Item>
      ) : (
        ''
      )}
      <Menu.Item key="2" icon={<InfoCircleOutlined />}>
        <Link to={`${url}/basic`}>Informacion Basica</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<CalendarOutlined />}>
        <Link to={`${url}/planning`}>Plan de rodaje</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        <Link to={`${url}/contacts`}>Contactos</Link>
      </Menu.Item>
    </Menu>
  );
};

export default ProjectMenu;
