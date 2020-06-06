import React, { FC, useContext } from 'react';
import { AppContext } from '../state-containers/app/AppContext';
import { Layout } from 'antd';
import AppMenu from './menu-items/AppMenu';
import ProjectMenu from './menu-items/ProjectMenu';
import { Route, Switch } from 'react-router-dom';

const { Sider } = Layout;

const SiderApp: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <Sider trigger={null} collapsible collapsed={state.isCollapsed} width={230}>
      <div className="brand">
        <div className="logo" />
        <div className="name">Rodando</div>
      </div>
      <Switch>
        <Route path="/" exact={true}>
          <AppMenu />
        </Route>
        <Route path="/projects" exact={true}>
          <AppMenu />
        </Route>
        <Route path="/contacts" exact={true}>
          <AppMenu />
        </Route>
        <Route path="/projects/:id">
          <ProjectMenu isCollapsed={state.isCollapsed} />
        </Route>
      </Switch>
    </Sider>
  );
};

export default SiderApp;
