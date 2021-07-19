import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import { Provider } from 'react-redux' 
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CandyContainer from './components/CandyContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksCandyContainer from './components/HooksCandyContainer';
import NewCakeContainer from './components/NewCakeContainer';
import NewIceCreamContainer from './components/NewIceCreamContainer';
import ItemContainer from './components/ItemContainer';
import AsyncActions from './components/AsyncActions';

function App() {
  return (

    <Provider store={store} > 
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <CandyContainer />

        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksCandyContainer />

        <NewCakeContainer />
        <NewIceCreamContainer />

        <ItemContainer cake />
        <ItemContainer />

        <AsyncActions />

      </div>
    </Provider>
    
  );
}

export default App;
