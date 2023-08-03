import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import {Routes, Route} from 'react-router-dom'
// import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  
  return (
    <>
    <div>
      <h1 style={{color: 'blue'}}>Welcome to the Puppy Bowl!</h1>
    </div>
      <div>
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/' element={<NewPlayerForm />} />
          <Route path='/players/:id' element={<SinglePlayer />} /> 
        </Routes>
      </div>
      {/* <div>
      <SearchBar />
      </div> */}
    </>
  )
}

export default App
