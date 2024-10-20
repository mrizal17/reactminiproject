import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate()
    const token=localStorage.getItem("access_token")

    useEffect(()=>{
        token
    },[])

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
      };
    
    return (
        <div>
            <div className="gap-4 flex bg-[#F5EFFF]">
        <Link to={'/register'}>
            <button className="hover:underline">Register</button>
        </Link>
        {token ? (

        <button onClick={handleLogout}> Logouut</button>
            
        ):( 
            <Link to={'/login'}>
        <button className="hover:underline">Login</button>
        </Link>
        )}
        <Link to ={'/userlist'}>
        <button className="hover:underline">User List</button>
        </Link>
        </div>
        </div>
    )
}
export default Navbar