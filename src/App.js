import './App.css';
import React, { useState } from 'react';
import MenuItem from './components/MenuItem';
import logo from './images/Basil_Thai_Logo.avif';


// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function MenuHeader() {
  return (
    <div className='header'>
      <img className="logo" src={logo} alt="logo" />
      <div className="subheading">Food for the soul, from the heart</div>
      <div className="graytext">Fresh, Fast, and Friendly!</div>
    </div>
  );
};

function App() {
  const [cost, setCost] = useState(0);
  const [cart, setCart] = useState({});

  const updateCart = (priceChange) => {
    setCost(Math.max(cost + priceChange, 0));
  };

  function handleItemChange(title, itemCount) {
    cart[title] = itemCount;
    setCart(cart);
  }

  const handleOrder = () => {
    if (cost === 0) {
      alert("No items in cart");
      return;
    }

    let cartMsg = "";

    Object.keys(cart).forEach((title) => {
      cartMsg += cart[title] + " " + title + "\n";
    });

    alert("Order Placed! \n" + cartMsg);
  };

  const handleClearAll = () => {
    setCost(0);
  };
  
  return (
    <div className='body'>
      <MenuHeader />
      <div className="menu">
        {menuItems.map((item) => (
        <MenuItem 
          title={item.title}
          description={item.description}
          imageName={item.imageName}
          price={item.price}
          updateCart={updateCart}
          cost={cost}
          handleItemChange={handleItemChange}
         />
        ))}
      </div>
      <div className="subtotal">
        Subtotal: ${cost.toFixed(2)}
        <button className="btn btn-primary" onClick={handleOrder} style={{ marginLeft: '10px' }}>Order</button>
        <button className="btn btn-secondary" onClick={handleClearAll} style={{ marginLeft: '10px' }}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
