import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState ("")
    const navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })
    

    const handleChangeForm = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value

        })
    };
  
    
    const handleLogin = () => {
        if(!formLogin.email|| !formLogin.password) {
            setError("Email dan Password Harus diisi!!")
            return
        }

        axios
        .post('https://reqres.in/api/login',formLogin)
        .then((res) => {
            console.log("res",res);
            
            const token = res.data.token
            localStorage.setItem("access_token", token);
            setError("")
            navigate("/userlist")
        })
        .catch((err)=>{
            console.log("err",err)
            setError("Email dan Password Salah!")
        })
    }



    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="mt-9">
                <h1>LOGIN</h1>
            </div>
        <div className="bg-[#08C2FF] w-fit  rounded-md flex flex-col justify-center items-center">
            <div className="grid  rounded-sm border-2 list-outside border-y-cyan-800 p-4 m-3 md:w-[500px]">
                <input type="email" name="email" placeholder="Email" onChange={handleChangeForm} />
            </div>
            <div className="grid rounded-sm border-2 border-y-cyan-800 p-4 m-3 md:w-[500px]">
                <input type="password" name="password" placeholder="Password" onChange={handleChangeForm} />
            </div>
            <div className="items-center text-center p-4">
                <button onClick={handleLogin} className="bg-cyan-700 w-20 h-8">Login</button>
                {error&& <div>{error}</div>}

            </div>
        </div>

        </div>
    )
}
export default Login