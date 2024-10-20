import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detailuser = () => {
    const {id} = useParams()
    const [dataDetailUser, setDataDetailUser] = useState([])

    const getDataDetailUser = () =>{
        axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res)=>setDataDetailUser(res.data.data))
        .catch((err)=>console.log(err))
    }

    useEffect (()=>(
        getDataDetailUser()
        
    ))
    return (
        <div className="bg-[#789DBC] w-auto h-auto m-4 rounded-xl">
            <img src={dataDetailUser.avatar} alt="" />
            <div className="p-1 text-2xl">{dataDetailUser.first_name}</div>
            <div className="p-1">{dataDetailUser.last_name}</div>
            <div className="p-1">{dataDetailUser.email}</div>
            <div className="p-1">{id}</div>
            <button className="bg-[#8ABFA3] w-16 h-10 rounded-full justify-center">Save</button>
        </div>
    )
}
export default Detailuser