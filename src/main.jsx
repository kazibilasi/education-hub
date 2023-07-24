import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Colleges from './component/Colleges/Colleges';
import Admission from './component/Admission/Admission';
import MyCollege from './component/MyCollege/MyCollege';
import ErrorPage from './component/ErrorPage/ErrorPage';
import CollegeDetails from './component/CollegeDetails/CollegeDetails';
import AdmissionForm from './component/AdmissionForm/AdmissionForm';
import AuthProvider from './component/AuthProvider/AuthProvider';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/admission",
        element: <Admission></Admission> 
      },
      {
        path: "/myCollege",
        element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>
      },
      {
        path: "/collegeDetails/:id",
        element: <CollegeDetails></CollegeDetails>
      },
      {
        path: "/admissionForm/:id",
        element: <AdmissionForm></AdmissionForm>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
