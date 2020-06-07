import React, { FC, useState, useEffect } from 'react';
import {
  Form,
  Col,
  Row,
  Input,
  DatePicker,
  Upload,
  Button,
  Divider,
  Collapse,
} from 'antd';
import { CaretRightOutlined, UploadOutlined } from '@ant-design/icons';
import { useProject } from '../../state-containers/projects/Store';
import Project from '../../models/Project';
import { useParams } from 'react-router-dom';

import notifyIcon from './../notify/notify';

const { Panel } = Collapse;

const ProjectFormBasic: FC = (props) => {
  const { id } = useParams();
  let [project, actions] = useProject({ uid: id });

  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  useEffect(() => {
    form.setFieldsValue(project);
  }, []);

  const onFinish = (values: any) => {
    actions.saveProject({ ...values, ...{ uid: project.uid } });
    notifyIcon({
      type: 'success',
      message: 'Guardar Nuevo Projecto',
      description: 'El projecto se ha guardado correctamente',
    });
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form layout="vertical" form={form} hideRequiredMark onFinish={onFinish}>
      <Row>
        <Col span={13}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nombre"
                rules={[
                  { required: true, message: 'Por favor, ingrese un nombre' },
                ]}
              >
                <Input allowClear placeholder="Por favor, ingrese un nombre" />
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
                  allowClear
                  rows={6}
                  placeholder="Ingrese una breve descripcion acerca del proyecto"
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={10} offset={1}>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="custom-collapse"
          >
            <Panel header="Archivos Guion" key="1" className="custom-panel">
              <Row>
                <Col span={12}>
                  <Form.Item name="screenplay" label="Guion narrativo">
                    <Upload>
                      <Button type="primary" ghost>
                        <UploadOutlined /> Subir archivo
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="shootingScript" label="Guion tecnico">
                    <Upload>
                      <Button type="primary" ghost>
                        <UploadOutlined /> Subir archivo
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Panel>
            <Panel header="Otras Imagenes" key="2" className="custom-panel">
              <Col span={24}>
                <Form.Item
                  name="images"
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
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <Row justify="end">
        <Divider />
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Limpiar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectFormBasic;
