import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BikeDetails from "../../Pages/BikeDetails/BikeDetails";
import Home from "../../Pages/Home/Home/Home";

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
                element: <BikeDetails></BikeDetails>
            }
        ]
    }
])

export default routes;