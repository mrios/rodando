import React, { FC } from 'react';
import { Row, Col, Button } from 'antd';
import { FileTextOutlined, FileTextFilled } from '@ant-design/icons';
import { useProject } from '../../state-containers/projects/Store';
import { useParams } from 'react-router-dom';

const ProjectToolbar: FC = () => {
  const { id } = useParams();
  const [project] = useProject({ uid: id });
  const style = {
    display:
      (project && project.screenplay) || (project && project.shootingScript)
        ? 'inherit'
        : 'none',
  };
  return (
    <Row className="toolbar" style={style}>
      <Col span="2" offset="1">
        <span className="toolbar-header">Vista Rapida</span>
      </Col>
      <Col span="6" offset="1">
        <Button
          size="small"
          icon={<FileTextOutlined />}
          disabled={!(project && project.screenplay)}
        >
          Guion narrativo
        </Button>
        <Button
          size="small"
          icon={<FileTextFilled />}
          disabled={!(project && project.shootingScript)}
        >
          Guion técnico
        </Button>
      </Col>
    </Row>
  );
};

export default ProjectToolbar;
