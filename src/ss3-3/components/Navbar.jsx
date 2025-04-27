import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center  shadow-md bottom-80">
      <div className="text-2xl font-bold">whitepace</div>
      <ul className="flex gap-6 text-white">
        <li>Products</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded bg-white text-blue-950">Login</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Try Whitepace free →</button>
      </div>
    </nav>
  );
}

export default Navbar;
