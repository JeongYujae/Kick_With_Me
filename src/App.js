import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './/pages/Profile'
import './App.css';
import Home from './/pages/Home'
import React from 'react';
import JoinMatch from './pages/JoinMatch';

// JSON파일, BE API 로부터 받을 예정
const dummyUserList= [
  {'id':1,'name':'Jeong Yujae', 'age':22, 'position':'LW', 'height':177, 'weight':71, 'introduce':'The scoring Fox!','history':'2019-2021 Sungboo/2022 Yaban',
  'record':'30G 12A/ 5G 8AS'},
  {'id':2,'name':'Federico Valverde', 'age':25, 'position':'CM', 'height':183, 'weight':67, 'introduce':'Heart for Madrid','history':'2017-2022 Real Madrid',
  'record':'15G/40AS'},
  {'id':3,'name':'Antonio Rudiger', 'age':30, 'position':'CB', 'height':190, 'weight':81, 'introduce':'NEW WALL OF MADRID','history':'2016-2021 Chealsea/2022 Real Madrid',
  'record':'20G 12AS/ 0G 0AS' }
]

const dummyMatchList= [
  {'id':1,'name':'용산 아이파크 풋살 제 1구장','time':'2022-08-09/17:00-19:00','player':'7/10','level':'2'},
  {'id':2,'name':'잠실 로꼬풋살장','time':'2022-08-11/18:00-20:00','player':'2/10','level':'1'},
  {'id':3,'name':'성보 풋살 제 3구장 A면','time':'2022-08-15/20:00-22:00','player':'4/10','level':'2'},

]


export const PlayerStateContext= React.createContext();
export const MatchStateContext= React.createContext()
function App() {
  return (
    <PlayerStateContext.Provider value={dummyUserList}>
      <MatchStateContext.Provider value={dummyMatchList}>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/match' element={<JoinMatch/>}></Route>
        <Route path='/profile/:id' element={<Profile/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </MatchStateContext.Provider>
    </PlayerStateContext.Provider>
  )
}

export default App;
