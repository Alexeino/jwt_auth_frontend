import './App.css';
import Layout from './hocs/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
                <Routes>
                  <Route exact={true} path="/" element={<PrivateRoute />}>
                    <Route exact={true} path="/" element={<HomePage/>} />
                  </Route>
                  <Route exact={true} path="/login" element={<LoginPage/>} />
                </Routes>
          </Layout>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
