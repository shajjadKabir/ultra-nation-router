import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
