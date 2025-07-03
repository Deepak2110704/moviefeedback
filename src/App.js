import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import ReviewList from "./components/ReviewList";
import "./App.css";
import MovieFeedback from "./components/MovieFeedback";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Movie Feedback App📽️</h1>
        <nav className="nav">
          <Link to="/feedback"className="main">Give Feedback</Link>
          <Link to="/reviews"className="main">View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<MovieFeedback />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;