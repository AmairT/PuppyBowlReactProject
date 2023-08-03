import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import Previous from "./Previous";
import Delete from "./Delete";

export default function SinglePlayer() {
    let {id} = useParams();
    // const navigate = useNavigate();
    const [playerId, setPlayerId] = useState({})
    // const cohortName = '2302-acc-ct-web-pt-a';

    useEffect(() => {
        const fetchSinglePlayer = async ()=> {
            try {
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-a/players/${id}`);
                const result = await response.json();
                setPlayerId(result.data.player)
                if (result.error) throw result.error;
            } catch (error) {
                console.error('Sorry, trouble fetching this player!', error);
            }
        }
        fetchSinglePlayer();
    }, []);

    return (
        <>
            <div className='singlePlayer'>
                <h4>{playerId.name}</h4>
                <h4>{playerId.breed}</h4>
                <img src={playerId.imgUrl} /> <br />
                <Delete />
                <Previous />
            </div>
        </>
    )
}