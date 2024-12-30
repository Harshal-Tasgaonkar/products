import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import wirelessMouse from "../assets/images/wireless-mouse.jpg";
import headphones from "../assets/images/headphone.jpg";
import keyboard from "../assets/images/keyboard.jpg";
import chair from "../assets/images/chair.jpg";
import mobileStand from "../assets/images/mobile-stand.jpg";
import charger from "../assets/images/charger.jpg";
import yogaMat from "../assets/images/yoga-mat.jpg";
import bottle from "../assets/images/bottle.jpg";

const Products = () => {
 
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const navigate = useNavigate();

  const categories = [...new Set(productsData.map(product => product.category))];

  const filteredProducts = productsData.filter((product) => {
    // Filter by search term
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by category
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

    // Filter by price range
    const matchesPriceRange =
      priceRange === "low"
        ? product.price <= 30
        : priceRange === "medium"
        ? product.price > 30 && product.price <= 70
        : priceRange === "high"
        ? product.price > 70
        : true;

    return matchesSearchTerm && matchesCategory && matchesPriceRange;
  });

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1 className="text-center">Products</h1>

        {/* Filters and Search */}
        <div className="row mb-3">
          {/* Search Bar (col-12 on mobile, col-md-6 on tablet/desktop) */}
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters (stacked on small screens, side by side on medium and larger screens) */}
          <div className="col-12 col-md-6 d-flex justify-content-between mt-3 mt-md-0">
            {/* Category Filter */}
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              className="form-select ms-1"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="low">Under $30</option>
              <option value="medium">$30 - $70</option>
              <option value="high">Above $70</option>
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 mb-3"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
