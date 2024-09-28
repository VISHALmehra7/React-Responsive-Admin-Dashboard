import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import {
  User,
  UserCheck,
  UserIcon,
  UserPen,
  UserPlus,
  UserX,
} from "lucide-react";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/Users/UsersTable";
import UserGrowthChart from "../components/Users/UserGrowthChart";
import UserActivityHeatMap from "../components/Users/UserActivityHeatMap";

const USER_STATS = {
  totalUsers: 163774,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "4%",
};

const Users = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UserIcon}
            value={USER_STATS.activeUsers.toLocaleString()}
            color={"#6366F1"}
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={USER_STATS.activeUsers.toLocaleString()}
            color={"#8B5CF6"}
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={USER_STATS.churnRate}
            color={"#EC4899"}
          />
          <StatCard
            name="New Users TOday"
            icon={UserPlus}
            value={USER_STATS.newUsersToday}
            color={"#10B981"}
          />
        </motion.div>
        <UsersTable/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserGrowthChart/>
        <UserActivityHeatMap/>
       

        </div>
      </main>
    </div>
  );
};

export default Users;
