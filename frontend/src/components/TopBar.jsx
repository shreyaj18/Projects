import {useNavigate} from 'react-router-dom'
export function TopBar(){
    const navigate = useNavigate();
    return <div>
        <button onClick={()=> navigate("/")}>Signup</button>
        <button onClick={()=> navigate("/login")}>Login</button>
    </div>
}