import "./cart.scss";
import ArrowDown from "../../assets/VectorUp.svg";
import ArrowUp from "../../assets/VectorDown.svg";
import { useCartStore } from "../../store/CartStore";

const Cart = () => {
  const { totalPrice, order, addToCart, deleteFromCart } = useCartStore();

  return (
    <div className="Cart-Container">
      {order.map((item) => (
        <div key={item.name}>
          <div>
            <div>{item.name}</div>
            <p>{item.price * item.quantity} kr</p>
          </div>
          <div>
            <button onClick={() => addToCart(item.name, item.price)}>
              <img src={ArrowUp} />
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => deleteFromCart(item.name)}>
              <img src={ArrowDown} alt="" />
            </button>
          </div>
        </div>
      ))}
      <div>
        <p>Total</p>
        <p>{totalPrice}</p>
      </div>
      <button>Take my money!</button>
    </div>
  );
};

export default Cart;
