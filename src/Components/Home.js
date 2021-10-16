

/* Home.js : used for rendering 2 components:Header and Cart, header represents the upper
bar of the UI and Cart is the shopping cart that user will mainly interface with it */ 


import React from 'react';
import Header from '../Components/Header';
import Cart from '../Components/Cart/Cart';
import '.././Style/Style.css';



export default function Home() {
  
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
}