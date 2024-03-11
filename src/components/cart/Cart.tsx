import "./cart.scss";
import ArrowDown from "../../assets/VectorUp.svg";
import ArrowUp from "../../assets/VectorDown.svg";
import { useCartStore } from "../../store/CartStore";
import { submitOrder } from "../../api/apiFetches";
import { NewOrderRequest } from "../../api/types/NewOrderRequest";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    totalPrice,
    order,
    addToCart,
    deleteFromCart,
    setOrderNumber,
    resetCart,
  } = useCartStore();

  const navigate = useNavigate();

  const handleClick = async () => {
    const requestBody = {
      details: {
        order: order.flatMap((item) =>
          Array.from({ length: item.quantity }, () => ({
            name: item.name,
            price: item.price,
          }))
        ),
      },
    };
    console.log("requestbody", requestBody);
    const newOrderNumber = await submitOrder(requestBody as NewOrderRequest);
    setOrderNumber(newOrderNumber);
    navigate("/statuspage");
    resetCart();
  };

  return (
    <div className="Cart-Container">
      <h3 className="cart-title">Din beställning</h3>
      {order.map((item) => (
        <div className="cart-itemContainer" key={item.name}>
          <div className="cart-items">
            <p className="cart-itemName">{item.name}</p>

            <span className="dots">
              ...........................................................................
            </span>

            <div className="cart-buttons">
              <button onClick={() => addToCart(item.name, item.price)}>
                <img src={ArrowUp} />
              </button>
              <p className="cart-quantity">{item.quantity}</p>
              <button onClick={() => deleteFromCart(item.name)}>
                <img src={ArrowDown} alt="" />
              </button>
            </div>
            <p className="cart-itemPrice">{item.price * item.quantity} kr</p>
          </div>
        </div>
      ))}

      <div className="cart-totalPriceContainer">
        <div className="cart-textContainer">
          <p className="cart-totalPriceTitle">
            Total
            <span className="dots2">
              .....................................................
            </span>
          </p>

          <p className="cart-droneDelivery">inkl moms + drönarleverans</p>
        </div>
        <p className="cart-totalPrice">{totalPrice} kr</p>
      </div>

      <button
        className="cart-orderButton"
        onClick={() => handleClick()}
        disabled={order.length === 0}
      >
        Take my money!
      </button>
    </div>
  );
};

export default Cart;
