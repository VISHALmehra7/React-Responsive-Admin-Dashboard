import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MONTHLY_SALES = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5000 },
  { month: "Mar", sales: 2000 },
  { month: "Apr", sales: 1500 },
  { month: "May", sales: 2000 },
  { month: "Jun", sales: 4000 },
  { month: "Jul", sales: 5000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setselectedTimeRange] = useState("This Month");
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border mb-8 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1>Sales Overview</h1>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:bg-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setselectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={MONTHLY_SALES}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#885CF6"
              fill="#885CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
