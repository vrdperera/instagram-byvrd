import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Login from './pages/login';
import * as ROUTES from './constants/routes';

//react lazy dynamic imports
const login = lazy(() => import('./pages/login.js'));
const SignUP = lazy(() => import('./pages/sign-up.js'));
const NotFound = lazy(() => import('./pages/login.js.js'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>this is Suspense Fallback</h2>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={login} />
          <Route path={ROUTES.SIGN_UP} component={SignUP} />
          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
