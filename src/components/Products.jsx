import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../../utils/StatusCode";

const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch fetch
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return (
      <div className="flex text-2xl font-bold h-screen w-full items-center justify-center">
        <span className="loading loading-circle loading-lg text-secondary"></span>
      </div>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div className="w-full text-center">
          <span className="text-md text-black ">
            Something went wrong! Try again later
          </span>
        </div>
      </div>
    );
  }

  const addToCart = (item) => {
    // dispatch
    dispatch(add(item));
  };

  const cards = products.map((item) => (
    <div className="container card w-full bg-base-100 shadow-xl" key={item.id}>
      <figure className="">
        <img
          src={item.image}
          width={200}
          height={200}
          className="object-contain h-60 w-96 hover:scale-125 transition duration-500 cursor-pointer "
          alt="product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>$ {item.price}</p>
        <p>{item.category}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-screen-xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold py-6 text-center">Product Dashboard</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">{cards}</div>
    </div>
  );
};

export default Products;
