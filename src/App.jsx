import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const url = "https://fakestoreapi.com/products/";


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);
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
    if(search === ""){
      return true;
    }
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Card data={filteredData} />
    </div>
  );
}

export default App;
