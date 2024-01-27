// import React from 'react';
// import './App.css';
// import Nav from './Nav';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Nav/>
//      <h1>Hello, Front-end</h1>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Nav from './components/Nav';
import Product from './components/Product';
import Profile from './components/Profile';
import Update from './components/Update';
import Logout from './components/Logout';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// structure of entire page layout
const App = ()=>{
  return(
    <div className='nav-ul'>
         <Nav/>
         <Outlet/>
         <Footer/>
    </div>
  )
}
// routes for all pages
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Product/>
      },
      {
        path:"/add",
        element:<AddProduct/>
      },
      {
        path:"/update",
        element:<Update/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/logout",
        element:<Logout/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ]
  }
])

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
