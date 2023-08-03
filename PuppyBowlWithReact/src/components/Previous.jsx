import { useNavigate } from "react-router-dom"

export default function Previous() {
    const navigate = useNavigate();
    return (
        <div id='buttons'>
        <button className='previous' onClick={() => { navigate(-1) }}>Previous Page</button>
    </div>
    )
}