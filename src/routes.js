import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';

export default createAppContainer(
  createSwitchNavigator({
    Signin: createSwitchNavigator({
      Login,
    }),
    App: createSwitchNavigator({
      Home,
      NewProduct,
    }),
  }),
);
