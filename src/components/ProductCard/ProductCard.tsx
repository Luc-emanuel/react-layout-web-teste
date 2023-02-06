import React from "react";
import "./index.css";
import { BaseProps } from "../../utils/interfaces";
import { ItemProps } from "../../utils/interfaces";

interface ProductCardProps {
  size: string;
  item: ItemProps;
}

const getStyle = (size: string) => {
  if (size === "xs" || size === "sm") {
    return "-v";
  } else {
    return "";
  }
};

const ProductCard = (props: ProductCardProps) => {
  const { size, item } = props;
  return (
    <div id={`card${getStyle(size)}`}>
      <div id={`card-box${getStyle(size)}`}>
        <div id={`card-image${getStyle(size)}`}>
          <div id={`card-image-category${getStyle(size)}`}>
            <span>{item.category}</span>
          </div>
          <img alt="image-product" src={item.thumbnail} />
        </div>
        <div id={`card-content${getStyle(size)}`}>
          <div id={`title${getStyle(size)}`}>
            <span>{`${item.title}`}</span>
          </div>
          <div id={`brand${getStyle(size)}`}>
            <span>{`${item.brand}`}</span>
          </div>
          <div id={`description${getStyle(size)}`}>
            <span>{`${item.description.slice(0, 80)}${
              item.description.length >= 80 ? "..." : ""
            }`}</span>
          </div>
          <div id={`rating${getStyle(size)}`}>
            <span>{`${item.rating}/5`}</span>
          </div>
          <div id={`price${getStyle(size)}`}>
            <span id={`price-discount`}>{`$${
              Math.round(
                item.price * (1 - item.discountPercentage / 100) * 100
              ) / 100
            }`}</span>
            <span id={`price-normal`}>{`$${
              Math.round(item.price * 100) / 100
            }`}</span>
          </div>
          <div id={`stock${getStyle(size)}`}>
            <span id={`stock${getStyle(size)}-1`}>{`stock: `}</span>
            <span id={`stock${getStyle(size)}-2`}>{`${item.stock}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
