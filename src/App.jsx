import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import Admin from "./views/Admin";
import AppContext from "./store/DataContext";

function App() {
  return (
    <Router>
      <AppContext>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Admin} />
      </AppContext>
    </Router>
  );
}

export default App;
