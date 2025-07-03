import React from 'react';

function Card({ data, handleclick }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-12 py-10">
      
      <div className="w-full max-w-7xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://i.pinimg.com/736x/ee/b3/59/eeb359d08bb0e8a18b62ce0c64721884.jpg"
          alt="Top banner"
          className="w-full h-[320px] sm:h-[450px] md:h-[520px] object-cover transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-300"
        />
      </div>

     
<div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100">
  <div className="grid grid-cols-3 gap-10">
    {data.length ? (
      data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[540px] min-w-[260px]"
        >
          
           <div className="w-full h-[240px] overflow-hidden rounded-t-2xl flex items-center justify-center bg-white">
           <img
            src={item.image}
             alt={item.title}
             className="h-full object-contain transition-transform duration-300 hover:scale-[1.01]"
           />
           </div>



          
          <div className="flex flex-col justify-between flex-1 p-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-3">{item.description}</p>
              <div className="mt-3 text-indigo-600 font-bold text-lg">${item.price}</div>
            </div>

            <button
              onClick={() => handleclick(item)}
              className="mt-6 w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow hover:shadow-md transition duration-200 active:scale-95"
            >
               Add To Cart
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-gray-700 text-lg font-medium">
        Loading products...
      </p>
    )}
  </div>
</div>

    </div>
  );
}

export default Card;
