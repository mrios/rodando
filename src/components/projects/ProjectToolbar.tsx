import React, { FC } from 'react';
import { Row, Col, Button } from 'antd';
import { FileTextOutlined, FileTextFilled } from '@ant-design/icons';
import useProject from '../../hooks/useProject';

interface Props {}

const ProjectToolbar: FC = () => {
  const [project] = useProject();
  const style = {
    display: project.screenplay || project.shootingScript ? 'inherit' : 'none',
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
          disabled={!project.screenplay}
        >
          Guion narrativo
        </Button>
        <Button
          size="small"
          icon={<FileTextFilled />}
          disabled={!project.shootingScript}
        >
          Guion técnico
        </Button>
      </Col>
    </Row>
  );
};

export default ProjectToolbar;
