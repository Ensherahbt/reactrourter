import { Link } from "react-router-dom";



function Navbar() {
    return (
      <div className="one">
             <Link to='/one'>home</Link>
             <Link to='/two'>about us</Link>
             <Link to='/Profile'>Profile</Link>
             <Link to='/Home'>Home</Link>

      </div>
    );
  }
  
  export default Navbar;