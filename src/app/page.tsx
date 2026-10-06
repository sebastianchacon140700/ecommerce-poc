import React from 'react';

/**
 * Clean, Modern Storefront Mockup
 * Built with Next.js (React) and Tailwind CSS for rapid, responsive UI.
 */
export default function Home() {
  const mockProducts = [
    { id: 1, name: 'Minimalist Watch', price: 120, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Premium Leather Bag', price: 250, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Noise-Cancelling Headphones', price: 199, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Modern E-Commerce</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Cart (0)
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">${product.price}</p>
                <button className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
