import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('Electronics');
  const [productFreshness, setProductFreshness] = useState('Fresh');
  const [productPrice, setProductPrice] = useState('');
  const [editProductId, setEditProductId] = useState(null);

 const handleAddProduct = () => {
    if (!productName || !productPrice) {
      alert('Mohon isi Product Name dan Product Price!');
      return;
    }

    const newProduct = {
      id: uuidv4(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
    };

    setProducts([...products, newProduct]);
    resetForm();
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProductId(productId);
    setProductName(productToEdit.productName);
    setProductCategory(productToEdit.productCategory);
    setProductFreshness(productToEdit.productFreshness);
    setProductPrice(productToEdit.productPrice);
  };

  const handleUpdateProduct = () => {
    if (!productName || !productPrice) {
      alert('Mohon isi Product Name dan Product Price!');
      return;
    }

    const updatedProducts = products.map((product) =>
      product.id === editProductId
        ? {
            ...product,
            productName,
            productCategory,
            productFreshness,
            productPrice,
          }
        : product
    );

    setProducts(updatedProducts);
    resetForm();
  };

  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm('Apakah Anda ingin menghapus produk ini?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    }
  };

  const resetForm = () => {
    setProductName('');
    setProductCategory('Electronics');
    setProductFreshness('Fresh');
    setProductPrice('');
    setEditProductId(null);
  };
  
  return (
    <>
      <div className="hero-product text-start">
        <h2>Detail Product</h2>
        <form>
          <div className="name">
            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
            <input 
              type="text" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)} 
              className="form-control" id="inputProductName" aria-describedby="emailHelp" required="required"/>
          </div>
          <br />

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Product Category</label>
            <br />
            <div className="btn-group">
              <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className="dropdown">
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Sport">Sport</option>
              <option value="Gadget">Gadget</option>
              </select>
            </div>
          </div>
         
          <div className="mb-3">
            <label htmlFor="">Product Freshness</label>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio"  
                id="brand new"
                value="Brand New"
                checked={productFreshness === 'Brand New'}
                onChange={() => setProductFreshness('Brand New')}
                /> 
              <label className="form-check-label" htmlFor="flexRadioDefault1">Brand New</label>
            </div>
            <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio"  
                id="second hand"
                value="Second Hand"
                checked={productFreshness === 'Second Hand'}
                onChange={() => setProductFreshness('Second Hand')}
                /> 
              <label className="form-check-label" htmlFor="flexRadioDefault1">Second Hand</label>
            </div>
            <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio"  
                id="refufbished"
                value="Refufbished"
                checked={productFreshness === 'Refufbished'}
                onChange={() => setProductFreshness('Refufbished')}
                /> 
              <label className="form-check-label" htmlFor="flexRadioDefault1">Refufbished</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="">Product Price</label>
            <br />
            <div className="price-form">
              <p>$</p><input 
                        type="number" 
                        className='form-control'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}/>
            </div>
            {editProductId ? (
              <button className="btn btn-primary" onClick={handleUpdateProduct}>Update Product</button>
               ) : (
              <button className="btn btn-primary" onClick={handleAddProduct}>Submit</button>
                )}
          </div>
          <br />

          <div className="text-center">
             <h2>List Product</h2>
          </div>
          <br />
        </form>

        <Table striped bordered hover>
          <thead>
            <tr>
             <th>No</th>
             <th>Product Name</th>
             <th>Product Category</th>
             <th>Product Freshness</th>
             <th>Product Price</th>
             <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.productPrice}</td>
                <td>
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                <Button variant="success" onClick={() => handleEditProduct(product.id)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default FormProduct;
