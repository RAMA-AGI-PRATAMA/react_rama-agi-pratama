import React from 'react';

const DetailProductComponent = () => {
  return (
    <>
      <div className="hero-product text-start">
        <h2>Detail Product</h2>
        <form>
          <div className="name">
            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
            <input type="name" className="form-control" id="inputProductName" aria-describedby="emailHelp" required="required"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Product Category</label>
            <br />
            <div className="btn-group">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Choose... <span />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Electronics</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Furniture</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Clothing</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Sport</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Gadget</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Image of Product</label>
            <div className="hero-file">
              <label htmlFor="files" className="btn btn-primary">Choose File</label>
              <p>No file Choosen</p>
            </div>
            <input id="files" style={{ visibility: "hidden" }} type="file" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Product Freshness</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> 
              <label className="form-check-label" htmlFor="flexRadioDefault1">Brand New</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked=""/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">Second Hand</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked=""/>
              <label className="form-check-label" htmlFor="flexRadioDefault3">Refufbished</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Additional Description</label>
            <br />
            <textarea name="text" className="form-control" id="inputDescription" defaultValue={""} />
          </div>
          <div className="mb-3">
            <label htmlFor="">Product Price</label>
            <br />
            <div className="price-form">
              <p>$</p><input type="number" className='form-control'/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default DetailProductComponent;
