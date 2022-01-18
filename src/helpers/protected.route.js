import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {
  <Route
    {...rest}
    render={({ location }) => {
      if (user) {
        return children;
      }

      if (!user) {
        return (
          <Redirect
            to={{
              pathname: ROUTES.login,

              state: { from: location },
            }}
          />
        );
      }
    }}
  />;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
