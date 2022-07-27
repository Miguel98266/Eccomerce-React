import React, { useEffect, useState } from "react";
import { ecomerceApi } from "../Api/eCommerce";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fallback  from "../assets/fallback.png";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";
import Header from "../shared/Header";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductsData = async () => {
    setLoading(true)
    const res = await ecomerceApi.get("/api/v1/item");
    console.log(res.data)
    setProducts(res.data);
    setLoading(false)
  };
  

  useEffect(() => {
    getProductsData();
    return () => {
      console.log("Adios productos");
    };
  }, []);

  return (
    <>
      <div className="container d-flex flex-column gap-3 mt-5">
      {
        loading ? <Spinner className="mx-auto" style={{ width: "200px", height: "200px" }}/> : 
        (<div className="d-flex flex-wrap gap-3 justify-content-center">
        {products.map((producto) => (
          <Card style={{ width: "18rem" }} key={producto._id}>
            <Card.Img className="image-card" variant="top" src={producto.image ? producto.image :fallback}
              onError={(e)=>{e.target.onerror = null; e.target.src= fallback }}
            />           
            <Card.Body>
            <Link className="link" to={`/${producto._id}`}>
              <Card.Title className="text-center product-name text-truncate" > {producto.product_name} </Card.Title>
            </Link>
              <Card.Text className="text-truncate text-center">
               Model: {producto.brand}
              </Card.Text>
              <Card.Text className="fw-bolder fs-5 text-center"  >
               $ {producto.price}.00
              </Card.Text>
              <div className="d-grid gap-2">
              <Link className="btn btn-success" to={`/${producto._id}`}>
                View More
              </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>)
      }
      </div>
    </>
  );
};