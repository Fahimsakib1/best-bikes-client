import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AdminPage/AllBuyers/AllBuyers";
import AllRegisteredUsers from "../../Pages/AdminPage/AllRegisteredUsers/AllRegisteredUsers";
import AllSellers from "../../Pages/AdminPage/AllSellers/AllSellers";
import ReportedProducts from "../../Pages/AdminPage/ReportedProducts/ReportedProducts";
import BikeDetails from "../../Pages/BikeDetails/BikeDetails";
import BikeDetailsForBuying from "../../Pages/BikeDetailsForBuying/BikeDetailsForBuying";
import Blogs from "../../Pages/Blogs/Blogs";
import BuyerOrders from "../../Pages/BuyerPage/BuyerOrders/BuyerOrders";
import BuyerPaymentHistory from "../../Pages/BuyerPage/BuyerPaymentHistory/BuyerPaymentHistory";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import DashboardHomePage from "../../Pages/DashboardHomePage/DashboardHomePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Payment from "../../Pages/Payment/Payment";
import AddProducts from "../../Pages/SellerPage/AddProducts/AddProducts";
import MyProducts from "../../Pages/SellerPage/MyProducts/MyProducts";
import Login from "../../Pages/Shared/Login/Login";
import Signup from "../../Pages/Shared/Signup/Signup";
import UpdateProfile from "../../Pages/Shared/UpdateProfile/UpdateProfile";
import SSLPaymentFailPage from "../../Pages/SSLPaymentFailPage/SSLPaymentFailPage";
import SSLPaymentSuccessPage from "../../Pages/SSLPaymentSuccessPage/SSLPaymentSuccessPage";
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

            {
                path: '/category/:id',
                loader: ({params}) => fetch(`https://best-bikes-server.vercel.app/category/${params.id}`),
                element: <PrivateRoute><BikeDetails></BikeDetails></PrivateRoute>
            },

            {
                path: '/bikeDetails/:id',
                // loader: ({params}) => fetch(`http://localhost:5000/bikeDetails/${params.id}`),
                loader: ({params}) => fetch(`https://best-bikes-server.vercel.app/bikeDetails/${params.id}`),
                element: <PrivateRoute><BikeDetailsForBuying></BikeDetailsForBuying></PrivateRoute>
            },

            {
                path: '/payment/success',
                element: <PrivateRoute><SSLPaymentSuccessPage></SSLPaymentSuccessPage></PrivateRoute>
            },

            {
                path:'/contactUs',
                element: <ContactUs></ContactUs>
            },

            {
                path: '/payment/fail',
                element: <PrivateRoute><SSLPaymentFailPage></SSLPaymentFailPage></PrivateRoute>
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
            },

            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
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
            },

            {
                path: '/dashboard/updateProfile',
                // element: <BuyerRoute><UpdateProfile></UpdateProfile></BuyerRoute>
                element: <UpdateProfile></UpdateProfile>
            },

            {
                path: '/dashboard/updateProfile',
                //element: <SellerRoute><UpdateProfile></UpdateProfile></SellerRoute>
                element: <UpdateProfile></UpdateProfile>
            },

            {
                path: '/dashboard/updateProfile',
                //element: <AdminRoute><UpdateProfile></UpdateProfile></AdminRoute>
                element: <UpdateProfile></UpdateProfile>
            },

            {
                path: '/dashboard/paymentHistory',
                element: <BuyerRoute><BuyerPaymentHistory></BuyerPaymentHistory></BuyerRoute>
            },

            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllRegisteredUsers></AllRegisteredUsers></AdminRoute>
            }


        ]
    },


    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default routes; 