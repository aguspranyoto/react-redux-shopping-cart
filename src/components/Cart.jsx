import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch remove
    dispatch(remove(id));
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
            className="btn btn-warning btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-screen-xl mx-auto p-6 h-screen">
      <h2 className="text-2xl font-bold py-6 text-center">Cart</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">{cards}</div>
    </div>
  );
};

export default Cart;
