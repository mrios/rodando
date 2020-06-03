import React from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { pathToRegexp } from 'path-to-regexp';

type ObjectStringType = {
  [key: string]: string | undefined;
};

const BreadcrumbApp = withRouter((props: any) => {
  const { location } = props;

  let breadcrumbNameMap: ObjectStringType = {
    '/projects': 'Proyectos',
    '/projects/:id': 'Proyecto <...>',
    '/projects/:id/basic': 'Información Básica',
    '/projects/:id/planning': 'Plan de rodaje',
    '/projects/:id/contacts': 'Contactos',
    '/contacts': 'Contactos',
  };

  const pathSnippets = location.pathname.split('/').filter((i: any) => i);

  const extraBreadcrumbItems: any = [];
  pathSnippets.forEach((_: any, index: number) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    Object.keys(breadcrumbNameMap).forEach((item) => {
      if (pathToRegexp(item).test(url)) {
        extraBreadcrumbItems.push(
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[item]}</Link>
          </Breadcrumb.Item>
        );
      }
    });
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="/">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <React.Fragment>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </React.Fragment>
  );
});

export default BreadcrumbApp;
