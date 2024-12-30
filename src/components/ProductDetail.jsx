import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "./Navbar";
import wirelessMouse from "../assets/images/wireless-mouse.jpg";
import headphones from "../assets/images/headphone.jpg";
import keyboard from "../assets/images/keyboard.jpg";
import chair from "../assets/images/chair.jpg";
import mobileStand from "../assets/images/mobile-stand.jpg";
import charger from "../assets/images/charger.jpg";
import yogaMat from "../assets/images/yoga-mat.jpg";
import bottle from "../assets/images/bottle.jpg";


 const productsData = [
    
    {
      id: 1,
      name: "Bluetooth Headphones",
      description: "Over-ear Bluetooth headphones with noise cancellation",
      price: 79.99,
      category: "Electronics",
      stock: 75,
      rating: 4.7,
      image: headphones,
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      description: "Mechanical keyboard with RGB lighting",
      price: 49.99,
      category: "Gaming",
      stock: 50,
      rating: 4.3,
      image: keyboard,
    },
    
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      description: "Vacuum insulated bottle keeps drinks hot or cold",
      price: 12.99,
      category: "Kitchen",
      stock: 300,
      rating: 4.6,
      image: bottle,
    },
    {
      id: 4,
      name: "Smartphone Stand",
      description: "Adjustable and foldable stand for smartphones and tablets",
      price: 15.99,
      category: "Accessories",
      stock: 200,
      rating: 4.8,
      image: mobileStand,
    },
    {
      id: 5,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with customizable buttons",
      price: 25.99,
      category: "Electronics",
      stock: 120,
      rating: 4.5,
      image: wirelessMouse,
    },
    {
      id: 6,
      name: "Portable Charger",
      description: "10000mAh power bank with fast charging",
      price: 19.99,
      category: "Electronics",
      stock: 85,
      rating: 4.4,
      image: charger,
    },
    {
      id: 7,
      name: "Yoga Mat",
      description: "Non-slip yoga mat for home and gym use",
      price: 29.99,
      category: "Fitness",
      stock: 150,
      rating: 4.9,
      image: yogaMat,
    },
    {
      id: 8,
      name: "Office Chair",
      description: "Adjustable office chair with lumbar support",
      price: 129.99,
      category: "Furniture",
      stock: 30,
      rating: 4.6,
      image: chair,
    },
    
  ];


function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (

    <>

    <Navbar/>

    <div className="container my-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{
                  width: "414px",
                  height: "276px",
                  objectFit: "cover",
                }} className="img-fluid mb-3" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
      <button
        className="btn btn-primary"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>

    </>
  );
}

export default ProductDetail;
