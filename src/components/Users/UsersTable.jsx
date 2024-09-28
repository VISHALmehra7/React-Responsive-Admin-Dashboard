import React, { useState } from "react";
import { motion } from "framer-motion";
import { Delete, Edit, Search } from "lucide-react";

const USER_DATA = [
  {
    id: 1,
    name: "Priya Kumari",
    email: "priya@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Abhishek Kumar",
    email: "abhishek@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Ravi Singh",
    email: "ravi@example.com",
    role: "Moderator",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sonia Sharma",
    email: "sonia@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Vikram Patel",
    email: "vikram@example.com",
    role: "Customer",
    status: "Pending",
  },
];

const UsersTable = () => {
  const [searchParam, setsearchParam] = useState("");
  const [filteredUser, setfilteredUser] = useState(USER_DATA);

  function handleChange(e) {
    const searchedUser = e.target.value.toLowerCase();
    setsearchParam(searchedUser);
    const filteredUser = USER_DATA.filter(
      (user) =>
        user.name.toLowerCase().includes(searchedUser) ||
        user.email.toLowerCase().includes(searchedUser)
    );
    setfilteredUser(filteredUser);
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border mb-8 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-100 font font-semibold ">User List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Users..."
            className="bg-gray-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400 pl-10"
            value={searchParam}
            onChange={handleChange}
          />
          <Search className="absolute top-3 left-2" size={17} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Name
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Email
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Role
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Status
            </th>
            <th className="uppercase px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
              Actions
            </th>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredUser.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100  ">
                  <span className="bg-blue-800 p-2 rounded-full text-blue-200">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <span
                    className={`rounded-full p-2 font-semibold ${
                      user.status === "Active"
                        ? "bg-green-800 text-green-100"
                        : " bg-red-600 text-red-100"
                    }`}
                  >
                    {" "}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <button>
                    <Edit className="text-green-600 mr-2" />
                  </button>
                  <button>
                    <Delete className=" text-red-600" />
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

export default UsersTable;
