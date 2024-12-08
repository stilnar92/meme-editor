import { HomePage } from '@/pages/home';
import { EditorPage } from '@/pages/editor';

const createRoute = (path) => ({ params } = {}) => {
  if (!params) return path;
  const searchParams = new URLSearchParams(params);
  return `${path}?${searchParams.toString()}`;
};

export const ROUTE_CONFIG = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/editor',
    Component: EditorPage,
  },
];

export const ROUTES = {
  home: createRoute('/'),
  editor: createRoute('/editor'),
};
