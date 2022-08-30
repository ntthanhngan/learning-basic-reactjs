import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from './Nav/NavbarComponent';
import MyComponent from './Example/MyComponent'
import ListTodoComponent from './Todos/ListTodoComponent'
import ListUsers from './Users/ListUsers';

import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './Example/Home';
import DetailedUser from './Users/DetailedUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavbarComponent />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodoComponent />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id" >
              <DetailedUser />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
