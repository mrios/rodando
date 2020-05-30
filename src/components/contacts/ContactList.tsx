import React, { FC } from 'react';
import { Empty } from 'antd';

const ContactList: FC = (props) => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description="No hay contactos agregados"
    />
  );
};

export default ContactList;
