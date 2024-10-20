import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"



const Userlist = () => {
    const [dataUserlist, setDataUserList] = useState ([])

    const getUserList = () => {
        axios
        .get('https://reqres.in/api/users')
        .then((res)=>
            
            setDataUserList(res.data.data))
        .catch((err)=>console.log(err))
    }

    console.log(dataUserlist)

    useEffect(()=> {
        getUserList()
    },[])

    return (
        <>
        <Navbar/>
        <div>
            <h1 className="bg-[#08C2FF] text-center font-semibold text-xl">User List</h1>
            {dataUserlist.map((item,index)=> (
                <div key={index} className="flex gap-1 m-2 bg-[#FFD09B]">
                    <img src={item.avatar} alt="" />
                    <div className="grid p-1">
                    <h1>Name: {item.first_name}</h1>
                    <h2>Email: {item.email}</h2>
                    <Link to={`/detailuser/${item.id}`}>
                    <button className="bg-[#384B70] text-white hover:bg-[#507687] w-32">Detail User</button>
                    </Link>
                    </div>
                    
                    
                </div>
            ))}
        </div>
        </>
    )
}
export default Userlist