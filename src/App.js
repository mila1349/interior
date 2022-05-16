import React from 'react'
import './style.scss'
import Home from './Home/Home'
import Detail from './detail/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {

  

  return (
    <div className="App" data-scroll-container>
      <Router>
        <Switch>

          <Route path="/detail" onEnter={()=>console.log("adfjk")}>
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
