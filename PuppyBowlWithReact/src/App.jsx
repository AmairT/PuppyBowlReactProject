import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <h1>Hi</h1>
          <NavBar />
          <AllPlayers />
          <NewPlayerForm />
          <SinglePlayer />
      </div>
    </>
  )
}

export default App
