import React, { useContext } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { TOGGLE_MENU } from '../context/AppTypes';
import { AppContext } from '../context/Context';

const { Header } = Layout;

const HeaderApp = () => {
  const { state, dispatch } = useContext(AppContext);
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
    </Header>
  );
};

export default HeaderApp;
