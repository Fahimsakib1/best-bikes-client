import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AdminPage/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AdminPage/AllSellers/AllSellers";
import ReportedProducts from "../../Pages/AdminPage/ReportedProducts/ReportedProducts";
import BikeDetails from "../../Pages/BikeDetails/BikeDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import BuyerOrders from "../../Pages/BuyerPage/BuyerOrders/BuyerOrders";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import DashboardHomePage from "../../Pages/DashboardHomePage/DashboardHomePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Payment from "../../Pages/Payment/Payment";
import AddProducts from "../../Pages/SellerPage/AddProducts/AddProducts";
import MyProducts from "../../Pages/SellerPage/MyProducts/MyProducts";
import Login from "../../Pages/Shared/Login/Login";
import Signup from "../../Pages/Shared/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";






const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home> 
            },

            // {
            //     path: '/category/:id',
            //     loader: ({params}) => fetch(`https://best-bikes-server.vercel.app/category/${params.id}`),
            //     element: <PrivateRoute><BikeDetails></BikeDetails></PrivateRoute>
            // },

            {
                path: '/category/:id',
                loader: ({params}) => fetch(`https://best-bikes-server.vercel.app/category/${params.id}`),
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
                element: <DashboardHomePage></DashboardHomePage>
            },

            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },

            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },

            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><BuyerOrders></BuyerOrders></BuyerRoute>
            },

            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },

            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }, 

            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            }, 

            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params}) => fetch(`https://best-bikes-server.vercel.app/orders/${params.id}`)
            }

        ]
    },


    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default routes; 