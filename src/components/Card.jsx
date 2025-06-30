import React from 'react';

function Card({ data }) {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.length ? (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-contain p-5 bg-gray-50"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-md font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              <div className="text-indigo-600 font-bold text-lg">₹ {item.price}</div>
              <button className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No data found</p>
      )}
    </div>
  );
}

export default Card;
