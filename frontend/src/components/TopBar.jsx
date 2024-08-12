import {useNavigate} from 'react-router-dom'
export function TopBar(){
    const navigate = useNavigate();
    return  <div className='flex justify-center items-center space-x-2 p-4 pt-2 mt-4'>
                <div className='border border-black p-2 pt-1 pb-1 rounded-xl bg-indigo-500 hover:bg-indigo-900 shadow-lg shadow-indigo-500/50 text-xl font-bold text-white items-center justify-center' >
                    <button className='w-20 p-1 text-center'
                    onClick={()=> navigate("/")}>Signup</button>
                </div>
                <div className='border border-black p-2 pt-1 pb-1 rounded-xl bg-indigo-500 hover:bg-indigo-900 shadow-lg shadow-indigo-500/50 text-xl font-bold text-white '>

                    <button className='w-20 p-1 text-center' 
                    onClick={()=> navigate("/login")}>Login</button>
                </div>
            </div>

}