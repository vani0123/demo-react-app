import { Home, Wildcards } from '../components';
import { ROUTE_CONSTANTS, APP_CONSTANTS } from '../constants';

const appRoutes = [{
  path: ROUTE_CONSTANTS.ROOT,
  component: Home,
  exact: true,
  type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC
}, {
  path: ROUTE_CONSTANTS.WILDCARDS.INTERNALSERVERERROR,
  component: Wildcards.InternalServerError,
  type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC
}, {
  path: ROUTE_CONSTANTS.WILDCARDS.NOTFOUND,
  component: Wildcards.NotFound,
  type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC
}, {
  path: ROUTE_CONSTANTS.WILDCARDS.UNAUTHORIZED,
  component: Wildcards.Unauthorized,
  type: APP_CONSTANTS.ROUTE_TYPES.PUBLIC
}];
export default appRoutes;
