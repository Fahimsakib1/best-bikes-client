import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import BikeDetails from "../../Pages/BikeDetails/BikeDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import Signup from "../../Pages/Shared/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><BikeDetails></BikeDetails></PrivateRoute>
            },

            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default routes;