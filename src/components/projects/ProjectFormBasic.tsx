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
  Modal,
} from 'antd';
import { CaretRightOutlined, UploadOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/es_ES';
import { useProject } from '../../state-containers/projects/Store';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import notifyIcon from './../notify/notify';
import { UploadFile } from 'antd/lib/upload/interface';

moment.locale('es');

const { Panel } = Collapse;

const ProjectFormBasic: FC = (props) => {
  const { id } = useParams();
  let [project, actions] = useProject({ uid: id });

  const [form] = Form.useForm();
  const [fileListProfileImage, setFileListProfileImage] = useState(
    project.profileImage ? [project.profileImage] : []
  );
  const [actionUpload] = useState(
    project.profileImage && project.profileImage.url
      ? project.profileImage.url
      : `/projects/${project.uid}/profile-image/`
  );
  const [previewIsVisible, setPreviewIsVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dateFormatToShow = 'DD/MM/YYYY';
  const dateFormatToSave = 'YYYY-MM-DD';

  useEffect(() => {
    form.setFieldsValue(project);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (values: any) => {
    actions.saveProject({
      ...values,
      ...{
        uid: project.uid,
        rangeDate: [
          values.rangeDate[0].format(dateFormatToSave),
          values.rangeDate[1].format(dateFormatToSave),
        ],
      },
    });
    notifyIcon({
      type: 'success',
      message: 'Guardar Nuevo Projecto',
      description: 'El projecto se ha guardado correctamente',
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeProfileImage = (props: { fileList: UploadFile<any>[] }) => {
    setFileListProfileImage(props.fileList);
  };

  const onPreviewProfileImage = async (file: UploadFile) => {
    setPreviewIsVisible(true);
    setConfirmLoading(true);
    if (file.url) {
      let response = await fetch(file.url);
      let data = await response.blob();
      let metadata = {
        type: 'image/jpeg',
      };
      let fileBlob = new File([data], 'preview.jpg', metadata);
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        setConfirmLoading(false);
      };
    }
  };

  const onRemoveProfileImage = (file: UploadFile) => {
    setFileListProfileImage([]);
  };

  return (
    <Form layout="vertical" form={form} hideRequiredMark onFinish={onFinish}>
      <Row>
        <Col span={13}>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="profileImage"
                label="Imagen de perfil"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, seleccione una imagen',
                  },
                ]}
              >
                <Upload
                  action={actionUpload}
                  listType="picture-card"
                  fileList={fileListProfileImage}
                  onChange={onChangeProfileImage}
                  onPreview={onPreviewProfileImage}
                  onRemove={onRemoveProfileImage}
                >
                  {fileListProfileImage.length < 1 && '+ Upload'}
                </Upload>
                <Modal
                  title="Vista previa"
                  style={{ top: 20 }}
                  visible={previewIsVisible}
                  onOk={() => setPreviewIsVisible(false)}
                  okText="Cerrar"
                  onCancel={() => setPreviewIsVisible(false)}
                  confirmLoading={confirmLoading}
                  bodyStyle={{ textAlign: 'center' }}
                >
                  <img
                    width="200"
                    alt="preview"
                    src={fileListProfileImage[0] && fileListProfileImage[0].url}
                  />
                </Modal>
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                name="name"
                label="Nombre"
                rules={[
                  { required: true, message: 'Por favor, ingrese un nombre' },
                ]}
              >
                <Input allowClear placeholder="Por favor, ingrese un nombre" />
              </Form.Item>
              <Form.Item
                name="rangeDate"
                label="Fechas de inicio y fin"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, seleccione un rango de fechas',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  locale={locale}
                  format={dateFormatToShow}
                />
              </Form.Item>
            </Col>
          </Row>
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
                    {fileListProfileImage.length < 5 && '+ Upload'}
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
