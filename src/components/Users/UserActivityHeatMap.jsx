import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const USER_ACTIVITY_CHART = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 56,
    "8-12": 112,
    "12-16": 50,
    "16-20": 80,
    "20-24": 30,
  },
  {
    name: "tue",
    "0-4": 40,
    "4-8": 76,
    "8-12": 200,
    "12-16": 90,
    "16-20": 90,
    "20-24": 10,
  },
  {
    name: "Wed",
    "0-4": 50,
    "4-8": 36,
    "8-12": 150,
    "12-16": 60,
    "16-20": 70,
    "20-24": 20,
  },
  {
    name: "Thu",
    "0-4": 70,
    "4-8": 56,
    "8-12": 99,
    "12-16": 90,
    "16-20": 80,
    "20-24": 20,
  },
  {
    name: "Fri",
    "0-4": 20,
    "4-8": 76,
    "8-12": 85,
    "12-16": 70,
    "16-20": 99,
    "20-24": 10,
  },
  {
    name: "Sat",
    "0-4": 10,
    "4-8": 46,
    "8-12": 80,
    "12-16": 30,
    "16-20": 70,
    "20-24": 30,
  },
  {
    name: "Sun",
    "0-4": 50,
    "4-8": 26,
    "8-12": 90,
    "12-16": 60,
    "16-20": 50,
    "20-24": 30,
  },
];

const UserActivityHeatMap = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">
        User Activity Heat Map
      </h1>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={USER_ACTIVITY_CHART}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3Af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="0-4" stackId="a" fill="#6366F1" />
            <Bar dataKey="4-8" stackId="a" fill="#8B5CF6" />
            <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10B981" />
            <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
            <Bar dataKey="20-24" stackId="a" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatMap;
