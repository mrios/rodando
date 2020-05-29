import React, { FC } from 'react';
import { PageHeader, Empty, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface EmptyBlockType {
  entity: string;
  clickHandler: Function;
  description?: string;
}

const EmptyBlock: FC<EmptyBlockType> = (props) => {
  return (
    <React.Fragment>
      <PageHeader
        className="site-page-header"
        title={`${props.entity}s`}
        subTitle="La lista esta vacia"
      />
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={props.description ? <span>{props.description}</span> : ''}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => props.clickHandler()}
        >
          Crear {props.entity}
        </Button>
      </Empty>
    </React.Fragment>
  );
};

export default EmptyBlock;
