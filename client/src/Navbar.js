import React from 'react';
import { NavLink, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light "> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Fees Managment System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/student">Add Student</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
