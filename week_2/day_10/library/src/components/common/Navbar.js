import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function Navbar(props) {
  async function onLogoutClicked() {
    await signOut(auth);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* <div className="navbar-brand">Navbar</div> */}
        <button
          className="navbar-toggler justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-lg-1 ms-lg-2" to="/">
                Home
              </Link>
            </li>
            {props.user ? (
              <li className="nav-item">
                <div className="btn btn-sm mx-lg-1 mt-lg-1 btn-outline-secondary " onClick={onLogoutClicked}>
                  Logout
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link ms-lg-2 mx-lg-1 " to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-1" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
