import React, { FC, useContext, useEffect } from 'react';
import { Menu, Layout, Row, Col, PageHeader, Button } from 'antd';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useParams,
} from 'react-router-dom';
import ProjectFormBasic from './ProjectFormBasic';
import ProjectPlanning from './ProjectPlanning';
import ProjectContacts from './ProjectContacts';
import { AppContext } from './../../context/Context';
import { FileTextOutlined } from '@ant-design/icons';
import Project from './../../models/Project';

const { Content } = Layout;

const ProjectDetails: FC = (props) => {
  let { url, path } = useRouteMatch();
  let history = useHistory();
  let { id } = useParams();
  const { state } = useContext(AppContext);
  const project = state.projects.find((p) => p.uid === id) || new Project();

  const goBack = () => {
    history.push('/projects');
  };

  useEffect(() => {
    history.push(`${url}/basic`);
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
                <ProjectFormBasic project={project} />
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
