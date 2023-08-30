import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Menu } from './pages/menu/Menu';

function App() {
  const [user, setUser] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleReceivedToken = (event) => {
      if (event.origin === 'http://localhost:3000') {
        const receivedToken = event.data;
        localStorage.setItem('token', receivedToken);
        setUser(receivedToken);
      }
    };

    window.addEventListener('message', handleReceivedToken);

    return () => {
      window.removeEventListener('message', handleReceivedToken);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Menu /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
