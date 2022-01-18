import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Login from './pages/login';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/useAuthListener';
import ProtectedRoute from './helpers/protectedRoute';

//react lazy dynamic imports
const login = lazy(() => import('./pages/login.js'));
const SignUP = lazy(() => import('./pages/sign-up.js'));
const Profile = lazy(() => import('./pages/profile.js'));
const NotFound = lazy(() => import('./pages/notFound.js'));
const Dashboard = lazy(() => import('./pages/dashboard.js'));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<h2>this is Suspense Fallback</h2>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={login} />
            <Route path={ROUTES.SIGN_UP} component={SignUP} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} exact path={ROUTES.DASHBOARD}>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
