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
const HistoryLineChart = ({analyticsData}) => {
  return (
    <div className="w-[100%] mt-6 bg-(--green) rounded-md">
      <LineChart data={analyticsData} width={window.screen.width - 25} height={350}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        {/* <YAxis type="number" domain={['dataMin', 'dataMax']}/> */}
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#82ca9d"
          activeDot={{ r: 7 }}
        />
        <Line type="monotone" dataKey="delivered" stroke="#8884d8" activeDot={{ r: 6 }}/>
        <Line type="monotone" dataKey="cancelled" stroke="#27548A" activeDot={{ r: 5 }}/>
        {/* <Line type="monotone" dataKey="cancelled" stroke="#261FB3" /> */}
      </LineChart>
    </div>
  );
};

export default HistoryLineChart;
