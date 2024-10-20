import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import Menu from "../page/Menu";
import Userlist from "../page/Userlist";
import Detailuser from "../page/Detailuser";
import ProtectedRoute from "./ProtectedRoute";



export const route = [
    {
        path: "/",
        element: <Home />
    },

    {
        path: '/register',
        element: <Register />
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/menu',
        element: <Menu />
    },
    {
        path: '/userlist',
        element: (
        <ProtectedRoute>
            <Userlist />
            </ProtectedRoute> 
            )
            
    },
    {
        path: '/detailuser/:id',
        element: <Detailuser />
    },
   

]