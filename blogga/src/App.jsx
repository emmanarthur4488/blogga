
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import DailyUpdate from './Components/DailyUpdate/DailyUpdate'
import Library from './Components/Library/Library'
import Tutorial from './Components/Tutorial/Tutorial'
import HomeUpdate from './Components/HomeUpdate/HomeUpdate'
import Tools from './Components/Tools/Tools'
import Footer from './Components/Footer/Footer'
import Subscribe from './Components/Subscribe/Subscribe'
import More from './Components/More/More'
import HomeTutorial from './Components/HomeTutorial/HomeTutorial'
import HomeTools from './Components/HomeTools/HomeTools'
import Tools2 from './Components/Tools2/Tools2'
import InterestPost from './Components/InterestPost/InterestPost'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Daily Update' element={<DailyUpdate/>}/>
          <Route path='/Tutorial' element={<Tutorial/>}/>
          <Route path='/Library' element={<Library/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
