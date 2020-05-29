import React, { FC } from 'react';
import EmptyBlock from '../common/EmptyBlock';

const ContactList: FC = (props) => {
  const addContact = () => {
    console.log('Create contact!');
  };

  return <EmptyBlock entity="Contacto" clickHandler={addContact} />;
};

export default ContactList;
