import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ecomerceApi } from "../Api/eCommerce";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const getSingleProductData = async ()=>{
        try{
            setLoading(true);
            const res= await ecomerceApi.get(`/api/v1/item/${productId}`);
            setProduct(res.data);
            setLoading(false)
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
      getSingleProductData();
      // eslint-disable-next-line
    }, [])
    


  return (
    <div className="container d-flex flex-column gap-3 mt-5"> {
        
        loading ? <Spinner className="mx-auto" style={{ width: "200px", height: "200px" }}/>:
        <Container>
      <Row>
        <Col >
        <img className="image-pdp" src={product.image} alt={product.product_name} />
        </Col>
        <Col className="my-auto ">
            <h1>{product.product_name} </h1>
            <h5 className="model">MODEL: {product.brand} </h5>
            <h6 >Category: {product.category} </h6>
            <div>
                <p className="price">$ {product.price} </p>
              
            </div>
            <p className="description"> {product.description}</p>
            <div className="d-grid gap-2">
            {
              product.isActive?<Button variant="success" size="lg">Add to cart</Button>:
              <Button variant="secondary" size="lg" disabled>Out of stock</Button>
            }
                
            </div>
        </Col>
      </Row>
     
    </Container>
    } </div>
  )
}
