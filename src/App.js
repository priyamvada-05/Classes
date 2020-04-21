import React from 'react';
import './App.css';
import HomePageComponent from './pages/homepage';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate} from 'redux-persist/integration/react';
import { Provider} from 'react-redux';
import {store, persistor} from './redux/store';

function App() {
  return (
    <div className="App">
        <Provider  store={store}>
          <BrowserRouter >
            <PersistGate persistor={persistor}>
              <HomePageComponent />
            </PersistGate>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
