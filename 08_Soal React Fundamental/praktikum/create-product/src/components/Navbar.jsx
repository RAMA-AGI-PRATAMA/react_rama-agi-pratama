import React from 'react';

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Simple header</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="ms-auto navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">
                    <button className="btn btn-primary">Home</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="btn btn-primary">Features</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="btn btn-primary">Pricing</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="btn btn-primary">FAQs</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="btn btn-primary">About</button>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
