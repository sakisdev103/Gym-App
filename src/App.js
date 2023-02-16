import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Exersice from './components/Exersice';
import Add from './components/Add';
import Error from './components/Error';
import WorkoutList from './components/WorkoutList';

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<WorkoutList />} />
                <Route path="/home" element={<Home />} />
                <Route path="home/exersice/:id" element={<Exersice/>}/>
                <Route path="home/exersice/:id/add/:id" element={<Add/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App