import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar({num}) {
  return (
    <header className="p-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center me-2 mb-2 mb-lg-0 text-decoration-none">
              <h3 className='text-info display-6 fw-bold '>Shopper</h3>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" className="nav-link px-2 text-dark">About</a></li>
              <li className='nav-item dropdown'>
                <button className="nav-link dropdown-toggle px-2 text-dark"
                 id='navbarDropdown' role='button' data-bs-toggle='dropdown'>Shop</button>
                  {/* <ul className="dropdown-menu d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
                    <li><a className="dropdown-item rounded-2 active" href="#">Action</a></li>
                    <li><a className="dropdown-item rounded-2" href="#">Another action</a></li>
                    <li><a className="dropdown-item rounded-2" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item rounded-2" href="#">Separated link</a></li>
                  </ul> */}
              </li>
            </ul>

            <div className="text-end me-5 px-5">
              <button type="button" className="btn btn-outline-dark me-2"><FontAwesomeIcon icon={faCartShopping} /> Cart <span className='text-bg-dark rounded-pill f px-2'>{num}</span></button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar