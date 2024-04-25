import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="fixed-top">
      <div class="p-3 text-center bg-body-tertiary border-bottom border-black">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <Link className='nav-link' to='/'>
          <h3>NewsBrew</h3>
          </Link>
        </div>
        <div class="col-md-4">
          <form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
            <input autocomplete="off" type="search" class="form-control rounded" placeholder="Search" />
            <span class="input-group-text border-0 d-none d-lg-flex"><i class="fas fa-search"></i></span>
          </form>
        </div>

        <div class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div class="d-flex">
          <div class="form-check form-switch">
  <input class="form-check-input border-black" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
          </div>  
        </div>
       
      </div>
    </div>
  </div>

      <nav className="navbar navbar-expand-lg border-bottom border-black bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
