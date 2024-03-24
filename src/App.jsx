import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Components/HomePage/HomePage';
import Logein from './Components/Logein/Logein';
import Searsh from './Components/Searsh/Searsh';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Logein />}/>
      <Route path='/HomePage' element={<HomePage />}/>
      <Route path='/searchPage' element={<Searsh />}/>
    </Routes>
    </>
  )
}

export default App
 