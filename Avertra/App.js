import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import MyStack from './navigation';


function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
