import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import Admin from "./views/Admin";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/upload" component={Admin} />
    </Router>
  );
}

export default App;
