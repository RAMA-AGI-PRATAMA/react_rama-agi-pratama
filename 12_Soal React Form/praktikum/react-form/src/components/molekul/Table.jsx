import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const table = ({data, onDelete}) => {
    const noUrut = 1000
    return(
        <div className="col3 mt-4">
             <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Image of Product</th>
                    <th>Product Freshness</th>
                    <th>Additonal Description</th>
                    <th>Product Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {data.map((item,i) => (
                            <tr key={item.id}>
                            <td><Link to={`/Account/${item.id}`}>{noUrut + i + 1}</Link></td>
                            <td>{item.productname}</td>
                            <td>{item.productcategory}</td>
                            <td>{item.imageproduct}</td>
                            <td>{item.productfreshness}</td>
                            <td>{item.productdescription}</td>
                            <td>{item.productprice}</td>
                            <td>
                            <Button variant="danger" style={{color:'white'}} onClick={() => onDelete(item.id)}>Delete</Button>
                            </td>
                            <td>
                            <Button variant="success" style={{color:'white'}} onClick={() => onDelete(item.id)}>Edit</Button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
            </Table>
        </div>
    )
}
export default table