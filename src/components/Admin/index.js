import React, { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import "./index.css";

// Data for charts
const lineData = [
  { name: "Electronics", uv: 6000, pv: 3000, amt: 3000 },
  { name: "Men's Clothing", uv: 4500, pv: 2500, amt: 2700 },
  { name: "Women's Clothing", uv: 5500, pv: 4000, amt: 3500 },
  { name: "Jewelry", uv: 3000, pv: 1800, amt: 2200 },
];

const barData = [
  { name: "Electronics", uv: 6000, pv: 3000, amt: 3000 },
  { name: "Men's Clothing", uv: 4500, pv: 2500, amt: 2700 },
  { name: "Women's Clothing", uv: 5500, pv: 4000, amt: 3500 },
  { name: "Jewelry", uv: 3000, pv: 1800, amt: 2200 },
];

const pieData = [
  { name: "Electronics", value: 600 },
  { name: "Men's Clothing", value: 450 },
  { name: "Women's Clothing", value: 550 },
  { name: "Jewelry", value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >{`(Rate ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};

class Admin extends Component {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const jwtToken = Cookies.get("jwtToken");
    const isAdmin = jwtToken === "admin";

    if (!isAdmin) {
      return <Navigate to="/" />;
    }

    return (
      <div className="charts-container">
        <div className="chart-container charts-margin-bottom">
          <h3>Monthly Sales Trend by Category</h3>
          <ResponsiveContainer
            width="100%"
            height={300}
            className="chart-background"
          >
            <LineChart
              data={lineData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="charts-grid">
          <div className="chart-container">
            <h3>Sales Comparison by Category</h3>
            <ResponsiveContainer
              width="100%"
              height={300}
              className="chart-background"
            >
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3>Sales Distribution by Category</h3>
            <ResponsiveContainer
              width="100%"
              height={250}
              className="chart-background"
            >
              <PieChart>
                <Pie
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape}
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
