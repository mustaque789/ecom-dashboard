// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = ()=>{
//     return(
//         <div>
//             <ul>
//                 <li><Link to="/">Products</Link></li>
//                 <li><Link to="/add">Add Product</Link></li>
//                 <li><Link to="/update">Update</Link></li>
//                 <li><Link to="/logout">Logout</Link></li>
//                 <li><Link to="/profile">Profile</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
