import '../src/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlanningPage from './pages/PlanningPage';
import CartPage from './pages/CartPage';
import ContractorPage from './pages/ContractorPage';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';

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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contractor" element={<ContractorPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;