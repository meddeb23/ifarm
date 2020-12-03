import React from "react";
import './assets/style/main.css';
import "animate.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from "./assets/views/Home"
import ClientSpace from "./assets/views/ClientSpace"
import Login from "./assets/views/Login"
import NavBar from "./assets/components/navBar/NavBar";



function App() {
  return (
    <Router>
      {/* <NavBar/> */}
        <Switch>
          
          <Route path="/users">
            <ClientSpace />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          {/* <Route path="/">
            <Home/>
          </Route> */}
          
        </Switch>
    </Router>
  );
}

export default App;



function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}