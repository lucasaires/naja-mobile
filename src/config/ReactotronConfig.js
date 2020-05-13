import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactoronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: '192.168.1.1' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactoronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
