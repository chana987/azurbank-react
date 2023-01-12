import 'App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { StocksContext } from 'context/stocks';
import Home from 'screens/Home';
import Users from 'screens/Users';

function App() {
  const { loading } = useContext(StocksContext);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>הדף לא קיים</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      {loading && <CircularProgress />}
    </div>
  );
}

export default App;
