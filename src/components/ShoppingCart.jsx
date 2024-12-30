import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "./Navbar";

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (

   <>
     <Navbar/>

    <div className="container my-5">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="form-control"
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${totalPrice}</h3>
          <button className="btn btn-success">Checkout</button>
          <button className="btn btn-secondary ms-3" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>

    </>
  );
}

export default ShoppingCart;
