import React from 'react'
import Header from '../components/common/Header'
import {motion} from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import DailyOrders from '../components/orders/DailyOrders'
import OrderDistribution from '../components/orders/OrderDistribution'
import OrdersTable from '../components/orders/OrdersTable'


const ORDER_STATS ={
totalOrders:"2,333",
pendingOrders:432,
completedOrders:"2,321",
totalRevenue:"$88,907"
}

const Orders = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
        <Header title="Orders"/>
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={ORDER_STATS.totalOrders}
            color={"#6366F1"}
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={ORDER_STATS.pendingOrders}
            color={"#8B5CF6"}
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={ORDER_STATS.completedOrders}
            color={"#EC4899"}
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={ORDER_STATS.totalRevenue}
            color={"#10B981"}
          />
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            <DailyOrders/>
            <OrderDistribution/>
            </div>
            <OrdersTable/>
        </main>
    </div>
  )
}

export default Orders