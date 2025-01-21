import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} /> {/* Redirect to /users */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
