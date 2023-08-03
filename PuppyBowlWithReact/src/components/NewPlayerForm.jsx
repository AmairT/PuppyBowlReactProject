import { useState } from "react"

export default function NewPlayerForm() {
    const [newPlayer, setNewPlayer] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = ('');
    const [imageUrl, setImageUrl] = useState('');
    // const cohortName = '2302-acc-ct-web-pt-a';

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-a/players`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newPlayer,
                    breed: breed,
                    status: status,
                    imageUrl: imageUrl,
                })
        })
        const result = await response.JSON();
        console.log(result)
        setNewPlayer('');
        setBreed('');
        setStatus('');
        setImageUrl('');

        if (result.error) throw result.error;
    } catch (error) {
        console.error('Sorry, unable to add a new player!', error)
    }
}

return (
    <>
    <form method='post' onSubmit= {handleSubmit}>
        <h3>Add A New Player!</h3>
        <label>Name:{''}
            <input value={newPlayer} onChange={(e)=> {setNewPlayer(e.target.value)}}></input>
        </label>

        <label>Breed:{''}
            <input value={breed} onChange={(e)=> {setBreed(e.target.value)}}></input>
        </label>

        <label>ImageUrl:{''}
            <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}></input>
        </label>

        <div>
            <select value={status} onChange={(e)=> {setStatus(e.target.value)}}>
                <option value='none'>None</option>
                <option value='bench'>Bench</option>
                <option value='field'>Field</option>
            </select>
        </div>
            <button className='submit' type='submit'>Submit</button>
            <button className='reset' type='reset'>Reset</button>
    </form>
    </>
);
}