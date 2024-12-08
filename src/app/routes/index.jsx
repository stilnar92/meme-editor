import { Route, Routes } from 'react-router-dom';
import { ROUTE_CONFIG } from '@/shared/config/routes';

export function AppRoutes() {
  return (
    <Routes>
      {ROUTE_CONFIG.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
