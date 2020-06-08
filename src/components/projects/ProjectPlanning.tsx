import React, { FC } from 'react';
import { Table, Space, Button, Row, Col } from 'antd';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '',
    dataIndex: 'move',
    key: 'move',
    render: (text: React.ReactNode) => <MenuOutlined />,
  },
  {
    title: 'Escena',
    dataIndex: 'scene',
    key: 'scene',
    render: (text: React.ReactNode) => <a href=".">{text}</a>,
  },
  {
    title: 'Plano',
    dataIndex: 'shot',
    key: 'shot',
  },
  {
    title: 'INT / EXT',
    dataIndex: 'interiorOrExterior',
    key: 'interiorOrExterior',
  },
  {
    title: 'Locacion',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Decorado',
    dataIndex: 'decoration',
    key: 'decoration',
  },
  {
    title: 'Dia / Noche',
    dataIndex: 'dayOrNight',
    key: 'dayOrNight',
  },
  {
    title: 'Cast',
    dataIndex: 'cast',
    key: 'cast',
  },
  {
    title: 'Editar',
    key: 'action',
    render: (text: any, record: { scene: React.ReactNode }) => (
      <Space size="middle">
        <a href=".">Editar</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    scene: 1,
    shot: 1,
    location: 'Guardia Vieja 2900',
    decoration: 'Decorado 1',
    interiorOrExterior: 'INT',
    dayOrNight: 'Dia',
    cast: 'Charly, Julieta, Abe',
  },
  {
    key: '2',
    scene: 1,
    shot: 2,
    location: 'Guardia Vieja 2900',
    decoration: 'Decorado 2',
    interiorOrExterior: 'EXT',
    dayOrNight: 'Noche',
    cast: 'Mumu',
  },
  {
    key: '3',
    scene: 2,
    shot: 1,
    location: 'Av. Lavalle 543',
    decoration: 'Decorado 1',
    interiorOrExterior: 'INT',
    dayOrNight: 'Dia',
    cast: 'Sarita',
  },
];

const ProjectPlanning: FC = (props) => {
  const colors = ['blue', 'green'];
  return (
    <React.Fragment>
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => console.log('add journey')}
          >
            Crear una nueva jornada
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            rowClassName={(record, index) =>
              `row-color-${colors[record.scene - 1]}`
            }
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ProjectPlanning;
