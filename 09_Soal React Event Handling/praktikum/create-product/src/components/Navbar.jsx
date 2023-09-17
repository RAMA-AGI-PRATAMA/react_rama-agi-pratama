import React from 'react';

const NavbarComponent = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="style.css" />
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
