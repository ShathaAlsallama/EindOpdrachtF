import React from 'react';
import './App.css';
import { Link, Route,  } from 'react-router-dom';
import Foto from './pages/foto/Foto';
import Account from './pages/account/Account';
import Client from './pages/client/Client';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/client">Client</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/foto">Flie</Link></li>
        </ul>
      </nav>

        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/client">
          <Client />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/foto">
          <Foto />
        </Route>

    </>
  );
}

export default App;
