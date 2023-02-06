import React, { useState, useEffect } from "react";
import "./index.css";
import { getProducts, hookSize, updateHookSize } from "../../utils/functions";
import Base from "../../components/Base/Base";
import { ItemProps } from "../../utils/interfaces";
import ProductCard from "../../components/ProductCard/ProductCard";
import { breakpoints } from "../../utils/constants";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(setProducts);
  }, []);
  const [size, setSize] = useState(hookSize());
  updateHookSize(setSize);
  return (
    <Base size={size}>
      {products.length > 0 ? (
        products.map((item: ItemProps, index: number) => {
          return <ProductCard size={size} item={item} key={`${index}-card`} />;
        })
      ) : (
        <></>
      )}
    </Base>
  );
};

export default Home;
