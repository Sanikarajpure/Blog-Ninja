import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import RouteGuard from "./RouteGuard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/blog" component={RouteGuard(Home)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
