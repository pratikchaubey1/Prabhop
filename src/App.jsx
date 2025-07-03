import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/Login';
import Cart from './page/Cart';
import Signup from './page/Signup';

function App() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const [cart, setcart] = useState([]);

  const url = "https://fakestoreapi.com/products/";

  const remove =(index) =>{
    const update = cart.filter((value,id)=>  index !== id )
    setcart(update);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const searchTerm = search.toLowerCase();
    if (search === "") return true;
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  });
     
  const handleclick = (item) => {
    setcart((prev) => [...prev, item]);
  };

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root search={search} setsearch={setsearch} />,
      children: [
        {
          path: "",
          element: <Home data={filteredData} setcart={setcart} handleclick={handleclick} />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Cart",
          element:  <Cart   cart={cart} setcart={setcart} remove={remove} />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
