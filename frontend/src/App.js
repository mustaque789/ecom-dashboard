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
import Product from './Product';
import Profile from './Profile';
import Update from './Update';
import Logout from './Logout';
import AddProduct from './AddProduct';
import Footer from './Footer';


import Nav from './Nav';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const App = ()=>{
  return(
    <div className='nav-ul'>
         <Nav/>
         <Outlet/>
         <Footer/>
    </div>
  )
}

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
      }
    ]
  }
])

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);