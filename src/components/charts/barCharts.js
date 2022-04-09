import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Friday",
    raservation: 200,
    complete: 20,
    seated: 12,
    upcomming: 30,
  },
  {
    name: "Saturday",
    raservation: 800,
    complete: 40,
    seated: 10,
    upcomming: 50,
  },
  {
    name: "Sunday",
    raservation: 500,
    complete: 60,
    seated: 80,
    upcomming: 10,
  },
  {
    name: "Monday",
    raservation: 100,
    complete: 55,
    seated: 52,
    upcomming: 45,
  },
  {
    name: "Tuesday",
    raservation: 100,
    complete: 34,
    seated: 20,
    upcomming: 10,
  },
  {
    name: "Wednesday",
    raservation: 300,
    complete: 50,
    seated: 14,
    upcomming: 30,
  },
  {
    name: "Thursday",
    raservation: 100,
    complete: 50,
    seated: 42,
    upcomming: 10,
  },
];

const BarCharts = () => {
  //   console.log(ResponsiveContainer);
  return (
    <div>
      <h1>asdf</h1>
      {/* <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer> */}
      {/* <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={450} height={400} data={data}>
          <Bar dataKey="raservation" fill="#8884d8" />
          <Bar dataKey="complete" fill="#8884d8" />
          <Bar dataKey="seated" fill="#8884d8" />
          <Bar dataKey="upcomming" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer> */}

      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={50}
          // barGap={4}
          layout="horizontal"
          stackOffset="expand"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="raservation" fill="#43ABA7" />
          <Bar dataKey="complete" fill="#F3722C" />
          <Bar dataKey="seated" fill="#90BE6D" />
          <Bar dataKey="upcomming" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
