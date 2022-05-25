import { Link } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
        </nav>
      </header>

      <hr />

      <AppRoutes />
    </div>
  );
}

export default App;
