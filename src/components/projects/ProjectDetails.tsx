import React, { FC, useEffect } from 'react';
import { Menu, Layout, Row, Col, PageHeader, Button } from 'antd';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { FileTextOutlined } from '@ant-design/icons';

import { ProjectProvider } from '../../context/projects/ProjectContext';
import useProject from '../../hooks/useProject';

import ProjectFormBasic from './ProjectFormBasic';
import ProjectPlanning from './ProjectPlanning';
import ProjectContacts from './ProjectContacts';
import ProjectToolbar from './ProjectToolbar';

const { Content } = Layout;

const ProjectDetails: FC = (props) => {
  const [project] = useProject();
  let { url, path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    history.push(`${url}/basic`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="site-layout-subcontent">
      <ProjectToolbar />
      <Row>
        <Col span={24}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
            }}
          >
            <ProjectProvider>
              <Switch>
                <Route path={`${path}/basic`}>
                  <ProjectFormBasic />
                </Route>
                <Route path={`${path}/planning`}>
                  <ProjectPlanning />
                </Route>
                <Route path={`${path}/contacts`}>
                  <ProjectContacts />
                </Route>
              </Switch>
            </ProjectProvider>
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default ProjectDetails;
