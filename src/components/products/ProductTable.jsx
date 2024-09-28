import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 60,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 120.99,
    stock: 43,
    sales: 500,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 69.99,
    stock: 543,
    sales: 700,
  },
  {
    id: 5,
    name: "Toaster",
    category: "Electronics",
    price: 110.99,
    stock: 500,
    sales: 1300,
  },
];

const ProductTable = () => {
  const [searchParam, setsearchParam] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(PRODUCT_DATA);

  function handleChange(e) {
    const searched = e.target.value.toLowerCase();
    setsearchParam(searched);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(searched) ||
        product.category.toLowerCase().includes(searched)
    );
    setfilteredProducts(filtered);
  }
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border mb-8 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between  items-center mb-6">
        <h2 className="font-semibold text-gray-100 text-xl">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products.."
            className="bg-gray-700 rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 "
            value={searchParam}
            onChange={handleChange}
          />
          <Search size={15} className="absolute left-3 top-3 text-gray-400 " />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Name
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Category
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              price
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              stock
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              sales
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              actions
            </th>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <button className="mr-2 text-indigo-400 hover:bg-indigo-200">
                    <Edit size={18} />
                  </button>

                  <button className="text-red-500 hover:bg-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
