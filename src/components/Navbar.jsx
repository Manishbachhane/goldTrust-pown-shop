// import './Navbar.css';

import { Link } from 'react-router-dom';

function Nav() {
  return (
<>    

  <nav className="   w-full bg-black text-white p-4 flex justify-between items-center h-16 overflow-hidden px-24">
        {/* <h1 className="text-2xl font-bold text-yellow-400">GoldTrust Pawn</h1>  */}
        <img src="./assets/goldTrust.png" className="w-24 ml-4" alt="img" />
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About-us</Link>
          <Link to="/service" className="hover:text-yellow-400">Service</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/register" className="hover:text-yellow-400">Register</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </div>
</nav>
</>
  );
}

export default Nav;