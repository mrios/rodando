import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/Context';
import Project from '../models/Project';

const useProject = () => {
  let { id } = useParams();
  const { state } = useContext(AppContext);
  const project = state.projects.find((p) => p.uid === id) || new Project({});
  return [project];
};

export default useProject;
