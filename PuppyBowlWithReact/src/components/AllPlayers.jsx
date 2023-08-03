import ajaxHelpers from '../API/ajaxHelpers'
import { useNavigate } from 'react-router-dom'
import NewPlayerForm from './NewPlayerForm'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const testPlayers = async() => {
            const playerArray = await ajaxHelpers()
            setPlayers(playerArray.data.players);
        };
        testPlayers();
    },[players])

    return (
    <>
        <div className='container'>
            {players.map((player) => {
                return (
                    <div className='allPlayers' key={player.id}>
                        <h4>Hi, my name is {player.name}!</h4>
                        <img src={player.imageUrl} /> <br />
                        <button onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
                    </div>
                )
            })
            }
            <NewPlayerForm />
        </div>
    </>
    );
}
