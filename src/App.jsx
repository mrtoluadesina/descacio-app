import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from "./store/DataContext";
import NotFound from "./views/NotFound";

const HomePage = lazy(() => import("./views/Home"));
const UploadPage = lazy(() => import("./views/Admin"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <AppContext>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AppContext>
      </Router>
    </Suspense>
  );
}

export default App;
