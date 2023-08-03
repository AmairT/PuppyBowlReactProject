import { useParams} from 'react-router-dom';

export default function Delete() {
    const {id} = useParams();

    const handleDelete = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players/${id}`, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(),
            })
            const result = await response.json();
            console.log(result);
            if(result.error) throw result.error;
        } catch (error) {
            console.error('Oops, unable to delete at this time!', error);
        }
    }
    return (
        <>
        <button onClick={handleDelete}>Delete Puppy</button>
        </>
    )
}
        