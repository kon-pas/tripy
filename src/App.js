import '../src/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlanningPage from './pages/PlanningPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/planning" element={<PlanningPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;