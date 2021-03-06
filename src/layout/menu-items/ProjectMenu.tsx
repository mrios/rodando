import React, { FC } from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { useProject } from '../../state-containers/projects/Store';

const ProjectMenu: FC<{ isCollapsed: boolean }> = (props) => {
  let { url } = useRouteMatch();
  const { id } = useParams();
  const [project] = useProject({ uid: id });
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
      {!props.isCollapsed && project && project.profileImage ? (
        <Menu.Item
          key="1"
          style={{
            minHeight: 140,
            maxHeight: 140,
            paddingRight: 24,
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            marginTop: 0,
            marginBottom: 18,
          }}
        >
          <img alt={project.name} width="200" src={project.profileImage.url} />
        </Menu.Item>
      ) : (
        ''
      )}
      <Menu.Item key="2" icon={<InfoCircleOutlined />}>
        <Link to={`${url}/basic`}>Información Básica</Link>
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
