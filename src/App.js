import GetKits from "pages/GetKits";
import Landing from "pages/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/get-test-kits" component={GetKits} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
