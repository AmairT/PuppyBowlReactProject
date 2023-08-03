import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
    <div>
      <h1>Welcome to the Puppy Bowl!</h1>
    </div>
      <div>
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/' element={<NewPlayerForm />} />
          <Route path='/players/:id' element={<SinglePlayer />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
