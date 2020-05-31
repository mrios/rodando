import React, { FC, useEffect } from 'react';
import { Menu, Layout, Row, Col, PageHeader, Button } from 'antd';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import ProjectFormBasic from './ProjectFormBasic';
import ProjectPlanning from './ProjectPlanning';
import ProjectContacts from './ProjectContacts';
import { FileTextOutlined } from '@ant-design/icons';
import useProject from '../../hooks/useProject';

const { Content } = Layout;

const ProjectDetails: FC = (props) => {
  const [project] = useProject();
  let { url, path } = useRouteMatch();
  let history = useHistory();

  const goBack = () => {
    history.push('/projects');
  };

  useEffect(() => {
    history.push(`${url}/basic`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="site-layout-subcontent">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            onBack={() => goBack()}
            title={project.name}
            subTitle={project.description}
            extra={[
              <Button key="1" type="primary" icon={<FileTextOutlined />}>
                Ver guion literiario
              </Button>,
              <Button key="2" icon={<FileTextOutlined />}>
                Ver guion tecnico
              </Button>,
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <Link to={`${url}/basic`}>Informacion Basica</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`${url}/planning`}>Plan de rodaje</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={`${url}/contacts`}>Contactos</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={19}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
            }}
          >
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
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default ProjectDetails;
