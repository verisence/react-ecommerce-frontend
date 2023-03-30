import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyCart,
} from "@/styles/CartStyles";

import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Cart = () => {
  const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyCart>
            <p>You have more shopping to do</p>
            <FaShoppingCart />
          </EmptyCart>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>$ {item.price}</h3>
                  <div>
                    <span>Quantity:</span>
                    <button>
                      <AiFillMinusCircle onClick={() => onRemove(item)} />
                    </button>
                    <p>{item.quantity}</p>
                    <button>
                      <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                    </button>
                  </div>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
