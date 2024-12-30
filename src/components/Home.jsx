import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (

   <>
   
   <div>
      
     <Navbar/>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to My Website</h1>
          <p className="lead">
            Discover amazing products and deals tailored just for you!
          </p>
          <a href="/products" className="btn btn-light btn-lg mt-3">
            Browse Products
          </a>
        </div>
      </header>
    </div>
   
   </>
 

  )
}

export default Home