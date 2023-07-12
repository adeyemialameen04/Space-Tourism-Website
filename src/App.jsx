import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
