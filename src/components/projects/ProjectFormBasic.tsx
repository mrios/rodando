import React, { FC, useState } from 'react';
import { Form, Col, Row, Input, DatePicker, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ProjectType } from '../../context/AppTypes';

const ProjectFormBasic: FC<{ project: ProjectType }> = (props) => {
  console.log(props.project.name);
  console.log(props.project.description);
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  return (
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              { required: true, message: 'Por favor, ingrese un nombre' },
            ]}
          >
            <Input
              placeholder="Por favor, ingrese un nombre"
              defaultValue={props.project.name}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="dateTime"
            label="Fechas de inicio y fin"
            rules={[
              {
                required: true,
                message: 'Por favor, seleccione un rango de fechas',
              },
            ]}
          >
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}></Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Descripcion"
            rules={[
              {
                required: true,
                message: 'Por favor, ingrese una descripcion',
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Ingrese una breve descripcion acerca del proyecto"
              defaultValue={props.project.description}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="screenplay"
            label="Guion narrativo"
            rules={[
              {
                required: true,
                message: 'Por favor, suba el guion narrativo',
              },
            ]}
          >
            <Upload {...props}>
              <Button>
                <UploadOutlined /> Click para subir el archivo
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="shootingScript"
            label="Guion tecnico"
            rules={[
              {
                required: true,
                message: 'Por favor, suba el guion tecnico',
              },
            ]}
          >
            <Upload {...props}>
              <Button>
                <UploadOutlined /> Click para subir el archivo
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="images"
            label="Imagenes"
            rules={[
              {
                required: true,
                message: 'Por favor, suba el guion narrativo',
              },
            ]}
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectFormBasic;