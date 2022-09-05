import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerDetail from './/pages/PlayerDetail'
import 'bootstrap/dist/css/bootstrap.css';
import AppProvider from './store';

import './App.css';
import Home from './/pages/Home'
import React from 'react';
import JoinMatch from './pages/JoinMatch';
import Team from './pages/Team';
import Navbar from './components/NavBar';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

import LoginRequiredRoute from './utils/LoginRequiredRouter';

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
  {'id':4,'name':'성내 유수지','time':'2022-08-17/21:00-23:00','player':'6/10','level':'1'},
  {'id':5,'name':'월드컵 경기장 B면','time':'2022-08-18/20:00-22:00','player':'4/10','level':'2'},
  {'id':6,'name':'미추홀외국어고등학교','time':'2022-08-20/19:00-21:00','player':'7/10','level':'3'},
  {'id':7,'name':'경희대학교 풋살장','time':'2022-08-13/20:00-22:00','player':'9/10','level':'2'},
  {'id':8,'name':'스카이필드 야탑점','time':'2022-08-20/20:00-22:00','player':'2/10','level':'3'},

]


const dummyTeamList= [
  {'id':1,'name':'성보축구회','age':'20-50','location':'서을시 관악구','level':'2'},
  {'id':2,'name':'스페인축구회','age':'20-30','location':'마드리드','level':'3'},
  {'id':3,'name':'경희축구회','age':'20','location':'서울시 동대문구','level':'1'},
  {'id':4,'name':'미추홀축구회','age':'20-30','location':'인천 미추홀구','level':'1'},
  {'id':5,'name':'해원축구회','age':'10','location':'인천 청라지구','level':'1'},

]

export const PlayerStateContext= React.createContext();
export const MatchStateContext= React.createContext()
export const TeamStateContext= React.createContext()
function App() {
  return (
    <PlayerStateContext.Provider value={dummyUserList}>
      <MatchStateContext.Provider value={dummyMatchList}>
      <TeamStateContext.Provider value={dummyTeamList}>
      <AppProvider>

        <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/match' element={<JoinMatch/>}></Route>
            <Route path='/team' element={<Team/>}></Route>
            <Route path='/player/:id' element={<PlayerDetail/>}></Route>
            {/* <Route path='/protected' element={<RequireAuth><ProtectedPage/></RequireAuth>}/> */}

          </Routes>

        </div>
        
        </BrowserRouter>
    </AppProvider>

      </TeamStateContext.Provider>
      </MatchStateContext.Provider>
    </PlayerStateContext.Provider>
  )
}

export default App;
