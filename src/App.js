import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast'; 

function App() {
  return (
    <div className='mx-auto dark:bg-black dark:text-white dark:max-w-[1550px]'>

      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
