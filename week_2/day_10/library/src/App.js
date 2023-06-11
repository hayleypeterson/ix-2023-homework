import './App.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Spinner from './components/common/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase/firebase';
import BookForm from './components/lib/BookForm';
import BookTable from './components/lib/BookTable';
import LibraryService from './services/library-service';
import { Book } from './models/book';

// Page Imports
import LibraryPage from './components/lib/LibraryPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth';

function App() {

  const [user, setUser] = useState([null]);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);


  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserUpdated ? (
      <Routes>
        <Route path="/" element={
            <RequireAuth user={user}> 
              <LibraryPage user={user} /> 
            </RequireAuth> }>
        </Route>    
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
      ) : (
        <div className="mt-5 text-center">
        <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
