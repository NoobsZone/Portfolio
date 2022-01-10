import React from "react";
import "./productList.css";
import {products} from "../Product/data"
// import Products from "../Product/Product"
import Product from "../Product/Product"

const ProductList = () => {
  return (
    <div className="pl ">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Anoy</h1>
        <p className="pl-desc">
          Anoy is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
