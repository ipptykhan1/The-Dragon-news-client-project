import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from '../Pages/News/News/News';
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Home/Login/Login/Login";
import Register from '../Pages/Home/Login/Register/Register'
import PrivateRoute from "./PrivateRoute";
import Trems from "../Pages/Shared/Trems/Trems";


const router = createBrowserRouter([
    
    {
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
            path:'/',
            element:<Navigate to={"/category/0"}></Navigate>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'terms',
            element:<Trems></Trems>
        }
      ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            
            {
                path:':id',
                element:<Category></Category>,
                loader:({params}) => fetch(`https://the-dragon-news-server-project-ipptykhan1.vercel.app/category/${params.id}`)

            }
        ]

    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-dragon-news-server-project-ipptykhan1.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;