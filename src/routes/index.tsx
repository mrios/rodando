import ProjectList from '../components/projects/ProjectList';
import ContactList from '../components/contacts/ContactList';
const routes = [
  {
    path: '/',
    exact: true,
    component: ProjectList,
  },
  {
    path: '/projects',
    exact: true,
    component: ProjectList,
  },
  {
    path: '/contacts',
    exact: true,
    component: ContactList,
  },
];

export default routes;
