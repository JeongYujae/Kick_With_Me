import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './/pages/Profile'
import './App.css';
import Home from './/pages/Home'
import React from 'react';

// JSON파일, BE API 로부터 받을 예정
const dummyList= [
  {'id':1,'name':'Jeong Yujae', 'age':22, 'position':'LW', 'height':177, 'weight':71, 'introduce':'The scoring Fox!'},
  {'id':2,'name':'Federico Valverde', 'age':25, 'position':'CM', 'height':183, 'weight':67, 'introduce':'Heart for Madrid' },
  {'id':3,'name':'Antonio Rudiger', 'age':30, 'position':'CB', 'height':190, 'weight':81, 'introduce':'NEW WALL OF MADRID' }
]


export const PlayerStateContext= React.createContext();
function App() {
  return (
    <PlayerStateContext.Provider value={dummyList}>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile/:id' element={<Profile/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </PlayerStateContext.Provider>
  )
}

export default App;
