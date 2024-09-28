import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const USER_GROWTH_DATA = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 2000 },
  { month: "Mar", users: 2500 },
  { month: "Apr", users: 3200 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 5000 },
];
const UserGrowthChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h1>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={USER_GROWTH_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="month" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
            contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
