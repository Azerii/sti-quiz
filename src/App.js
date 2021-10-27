import Loader from "components/Loader";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Landing = lazy(() => import("./pages/Landing"));
const GetKits = lazy(() => import("./pages/GetKits"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/get-test-kits" component={GetKits} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
