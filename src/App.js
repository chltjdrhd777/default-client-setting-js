import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from 'redux/Slices/carSlice';
import { getCars } from 'redux/Slices/Async/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars('/car'));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
