import React, { FC, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './../../context/Context';
import ProjectFormBasic from './ProjectFormBasic';
import { Card, PageHeader, Empty } from 'antd';
import { Drawer, Button, Row, Col, Space } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Project from '../../models/Project';
const { Meta } = Card;

const ProjectList: FC = (props) => {
  const { state } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);
  let history = useHistory();

  const showForm = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const editProject = (projectId: string) => {
    history.push(`/projects/${projectId}`);
  };

  return (
    <div className="project-wrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            onBack={() => showForm()}
            backIcon={<PlusOutlined />}
            title="Proyectos"
            subTitle=""
            extra={[
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => showForm()}
              >
                Crear un nuevo Proyecto
              </Button>,
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Drawer
          title="Crear un nuevo proyecto"
          width={720}
          onClose={onClose}
          visible={isVisible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancelar
              </Button>
              <Button onClick={onClose} type="primary">
                Guardar
              </Button>
            </div>
          }
        >
          <ProjectFormBasic project={new Project()} />
        </Drawer>
        <Space size="middle">
          {state.projects.length ? (
            state.projects.map((project: any) => (
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    className="trigger-img"
                    alt={project.name}
                    src={
                      project.pictures[0].url ||
                      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                    }
                    onClick={() => editProject(project.uid)}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined
                    key="edit"
                    onClick={() => editProject(project.uid)}
                  />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta title={project.name} description={project.description} />
              </Card>
            ))
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
              description="No hay datos"
            />
          )}
        </Space>
      </Row>
    </div>
  );
};

export default ProjectList;
