import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategory from "../components/sales/SalesByCategory";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const SALES_STATS = {
  totalRevenue: "$1,566,345",
  averageOrderValue: "$50.00",
  conversionRate: "2.45%",
  salesGrowth: "15.0%",
};

const Sales = () => {
  return (
    <div className="flex-1 overflow-auto z-10 relative">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={SALES_STATS.totalRevenue}
            color={"#6366F1"}
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={SALES_STATS.averageOrderValue}
            color={"#8B5CF6"}
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={SALES_STATS.conversionRate}
            color={"#EC4899"}
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={SALES_STATS.salesGrowth}
            color={"#10B981"}
          />
        </motion.div>
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesByCategory />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default Sales;
