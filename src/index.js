import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import HomePage from "./routes/HomePage";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "home_page/",
        element: <HomePage />,
      },
      {
        path: "login/",
        element: <LogIn />,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
    ],
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
