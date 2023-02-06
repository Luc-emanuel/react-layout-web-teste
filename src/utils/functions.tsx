import { breakpoints } from "./constants";

export const getElement = (type: string, key: string) => {
  let doc;
  if (type === "id") {
    doc = document.getElementById(key);
    return doc;
  }
  if (type === "class") {
    doc = document.querySelector(key);
  }
  return doc;
};

export const getProducts = (setProducts: Function) => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      setProducts(res.products);
    });
};

export const hookSize = () => {
  const width = window.innerWidth;
  let resp = "xs";
  if (width >= breakpoints.xs) {
    resp = "xs";
  }
  if (width >= breakpoints.sm) {
    resp = "sm";
  }
  if (width >= breakpoints.md) {
    resp = "md";
  }
  if (width >= breakpoints.lg) {
    resp = "lg";
  }
  if (width >= breakpoints.lx) {
    resp = "lx";
  }
  if (width >= breakpoints.xl) {
    resp = "xl";
  }
  return resp;
};

export const updateHookSize = (setSize: Function) => {
  window.addEventListener("resize", (e) => {
    setSize(hookSize());
  });
};
