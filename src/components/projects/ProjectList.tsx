import React, { FC } from 'react';
import EmptyBlock from '../common/EmptyBlock';

const ProyectList: FC = (props) => {
  const addProject = () => {
    console.log('Create project!');
  };

  return <EmptyBlock entity="Proyecto" clickHandler={addProject} />;
};

export default ProyectList;
