import React from 'react';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import UserForm from './components/userForm';
import './index.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
const App = () => (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AdminLogin />} />
    <Route path="/admindashboard" element={<AdminDashboard />} />
    <Route path="/userform" element={<UserForm />} />
  </Routes>
</BrowserRouter>
);

export default App;
