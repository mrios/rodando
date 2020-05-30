import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';
import ProjectFormBasic from '../components/projects/ProjectFormBasic';
import ProjectPlanning from '../components/projects/ProjectPlanning';
import ProjectContacts from '../components/projects/ProjectContacts';
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
