import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Userlist = () => {
    const [dataUserlist, setDataUserList] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 3,
        total: null,
        total_pages: null,
    });

    const getUserList = () => {
        axios
            .get(`https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`)
            .then((res) => {
                setDataUserList(res.data.data);
                setPagination({
                    page: res.data.page,
                    per_page: res.data.per_page,
                    total: res.data.total,
                    total_pages: res.data.total_pages,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUserList();
    }, [pagination.page]);

    const handleNext = () => {
        if (pagination.page < pagination.total_pages) {
            setPagination({
                ...pagination,
                page: pagination.page + 1,
            });
        }
    };

    const handleBack = () => {
        if (pagination.page > 1) {
            setPagination({
                ...pagination,
                page: pagination.page - 1,
            });
        }
    };

    return (
        <>
            <Navbar />
            <div>
                <h1 className="bg-[#08C2FF] text-center font-semibold text-xl">User List</h1>
                {dataUserlist.map((item) => (
                    <div key={item.id} className="flex gap-1 m-2 bg-[#FFD09B]">
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
                 <button disabled={pagination.page === 1} onClick={handleBack} className="bg-black text-white rounded-md w-24 m-2">Back</button>
                 <button disabled={pagination.page === pagination.total_pages} onClick={handleNext} className="bg-black text-white rounded-md w-24 m-2">Next</button>
            </div>
        </>
    );
};

export default Userlist;
