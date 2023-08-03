import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <h1>Hi</h1>
          <NavBar />
          <Link to='/NavBar'>Home</Link>
          <Link to='/AllPlayers'>All Players</Link>
          <Link to='/NewPlayerForm'>New Player Form</Link>
          <Link to='/SinglePlayer'>Single Player</Link>
      </div>
      <div>
        <Routes>
          <Route path='/NavBar' element={<NavBar />} />
          <Route path='/AllPlayers' element={<AllPlayers />} />
          <Route path='/NewPlayerForm' element={<NewPlayerForm />} />
          <Route path='/SinglePlayer' element={<SinglePlayer />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
