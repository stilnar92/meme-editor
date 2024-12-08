import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/app/routes';

export default function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Router>
        <AppRoutes />
      </Router>
    </Suspense>
  );
}
