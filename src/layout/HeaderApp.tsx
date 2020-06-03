import React, { useContext } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import useProject from '../hooks/useProject';
import { TOGGLE_MENU } from '../context/app/AppTypes';
import { AppContext } from '../context/app/AppContext';
import BreadcrumbApp from './BreadcrumbApp';

const { Header } = Layout;

const HeaderApp = () => {
  const { state, dispatch } = useContext(AppContext);
  const [project] = useProject();
  return (
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
      <BreadcrumbApp projectName={project.name} />
    </Header>
  );
};

export default HeaderApp;
