import {
  ProjectList,
  ProjectDetails,
  ProjectFormBasic,
  ProjectPlanning,
  ProjectContacts,
} from '../components/projects';
import { ContactList } from '../components/contacts';

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
    path: '/projects/:id',
    component: ProjectDetails,
    routes: [
      {
        path: '/projects/:id/details',
        component: ProjectFormBasic,
      },
      {
        path: '/projects/:id/planning',
        component: ProjectPlanning,
      },
      {
        path: '/projects/:id/contacts',
        component: ProjectContacts,
      },
    ],
  },
  {
    path: '/contacts',
    exact: true,
    component: ContactList,
  },
];

export default routes;
