import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useProjects } from '../../state-containers/projects/Store';
import { Card, PageHeader, Empty } from 'antd';
import { Button, Row, Col, Space } from 'antd';
import { EditOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import { ProjectType } from '../../state-containers/projects/ProjectTypes';
const { Meta } = Card;

const ProjectList: FC = (props) => {
  const [state, actions] = useProjects();
  let history = useHistory();

  const editProject = (projectId: string) => {
    history.push(`/projects/${projectId}`);
  };

  const newProject = () => {
    history.push(`/projects/new`);
  };

  const getLocalImage = (project: ProjectType): string => {
    return project.profileImage && project.profileImage.url
      ? require(`./../../fake-data/uploads/projects/${
          project.profileImage && project.profileImage.url
        }`)
      : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
  };

  useEffect(() => {
    actions.fetchData();
  }, []);

  return (
    <div className="project-wrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            onBack={() => newProject()}
            backIcon={<PlusOutlined />}
            title="Proyectos"
            subTitle=""
            extra={[
              <Button
                key="1"
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => newProject()}
              >
                Crear un nuevo Proyecto
              </Button>,
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Space size="middle">
          {state.projects.length ? (
            state.projects.map((project: any, key: number) => (
              <Card
                key={`project-${key}`}
                hoverable
                style={{
                  width: 250,
                  paddingRight: 24,
                }}
                cover={
                  <img
                    className="trigger-img"
                    alt={project.name}
                    src={getLocalImage(project)}
                    onClick={() => editProject(project.uid)}
                  />
                }
                actions={[
                  <SettingOutlined
                    key="setting"
                    onClick={() => editProject(project.uid)}
                  />,
                  <EditOutlined
                    key="edit"
                    onClick={() => editProject(project.uid)}
                  />,
                ]}
              >
                <Meta
                  style={{ height: 140 }}
                  title={project.name}
                  description={project.description.substr(0, 100) + ' ...'}
                />
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
