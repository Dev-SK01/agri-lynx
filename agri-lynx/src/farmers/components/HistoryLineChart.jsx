import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const HistoryLineChart = () => {
  const data = [
    {
      month: "Jan",
      price: 400,
      orders: 30,
      cancelled: 7,
      delivered: 20,
    },
    {
      month: "Feb",
      price: 300,
      orders: 13,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "Mar",
      price: 224,
      orders: 98,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "Apr",
      price: 270,
      orders: 39,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "May",
      price: 890,
      orders: 32,
      cancelled:12,
      delivered: 20,
    },
    {
      month: "June",
      price: 330,
      orders: 26,
      cancelled: 6,
      delivered: 20,
    },
    {
      month: "July",
      price: 499,
      orders: 98,
      cancelled: 8,
      delivered: 90,
    },
    {
      month: "Aug",
      price: 500,
      orders: 64,
      cancelled: 10,
      delivered: 54,
    },
    {
      month: "Sep",
      price: 800,
      orders: 65,
      cancelled: 5,
      delivered: 60,
    },
    {
      month: "Oct",
      price: 100,
      orders: 70,
      cancelled: 0,
      delivered: 34,
    },
    {
      month: "Nov",
      price: 900,
      orders: 22,
      cancelled: 12,
      delivered: 20,
    },
    {
      month: "Dec",
      price: 200,
      orders: 34,
      cancelled: 0,
      delivered: 10,
    },
  ];
  return (
    <div className="w-[100%] mt-6 bg-(--green) rounded-md">
      <LineChart data={data} width={window.screen.width - 25} height={350}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        {/* <YAxis type="number" domain={['dataMin', 'dataMax']}/> */}
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
        <Line type="monotone" dataKey="delivered" stroke="#27548A" />
        <Line type="monotone" dataKey="cancelled" stroke="#261FB3" />
      </LineChart>
    </div>
  );
};

export default HistoryLineChart;
