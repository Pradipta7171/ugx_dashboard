import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Fan,
  Lightbulb,
  LayoutDashboard,
  Search,
  Mail,
  Calendar,
  FileText,
  Table2,
  PieChart,
  Map,
  UserCircle2,
  Moon,
  Bell,
  Settings,
  Grid,
  ChevronDown,
  CogIcon,
  FormInput,
} from "lucide-react";

// Sample data for the average power consumption chart
const powerData = [
  { name: "2009", value: 1000 },
  { name: "2010", value: 1500 },
  { name: "2012", value: 3000 },
  { name: "2014", value: 500 },
  { name: "2016", value: 1000 },
  { name: "2018", value: 2000 },
  { name: "2019", value: 1000 },
];

const PowerDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard" },
    { icon: <Grid size={20} />, name: "Layouts" },
    { icon: <Mail size={20} />, name: "Mailbox" },
    { icon: <Calendar size={20} />, name: "Calendar" },
    { icon: <CogIcon size={20} />, name: "UI Elements" },
    { icon: <FormInput size={20} />, name: "Forms" },
    { icon : <FileText size={20} />, name: "Pages" },
    { icon: <Table2 size={20} />, name: "Tables" },
    { icon: <PieChart size={20} />, name: "Charts" },
    { icon: <Map size={20} />, name: "Maps" },
    { icon: <UserCircle2 size={20} />, name: "Profile" },
  ];

  const statsCards = [
    {
      icon: <Fan size={24} />,
      title: "Fans",
      value: "27",
      consumption: "270",
      bgColor: "bg-emerald-100",
      iconColor: "text-white",
      iconBg: "bg-emerald-400",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Light",
      value: "65",
      consumption: "876",
      bgColor: "bg-white",
      iconColor: "text-white",
      iconBg: "bg-red-400",
    },
    {
      icon: <PieChart size={24} />,
      title: "Refrigerator",
      value: "4",
      consumption: "0",
      bgColor: "bg-white",
      iconColor: "text-white",
      iconBg: "bg-yellow-400",
    },
    {
      icon: <PieChart size={24} />,
      title: "Air Condition",
      value: "65",
      consumption: "852",
      bgColor: "bg-white",
      iconColor: "text-white",
      iconBg: "bg-purple-400",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center space-x-2">
          <PieChart className="text-blue-600" />
          <span className="font-semibold text-xl">Power Analytics</span>
        </div>

        {/* Sidebar Menu */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors duration-200 relative ${
                    activePage === item.name
                      ? "text-blue-600 font-medium bg-blue-50" // Active item text style
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActivePage(item.name)}
                >
                  {/* Left blue line for active item */}
                  {activePage === item.name && (
                    <span className="absolute right-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
                  )}

                  {/* Icon */}
                  {item.icon}

                  {/* Menu Item Name */}
                  <span>{item.name}</span>

                  {/* Asterisk for other items except "Dashboard" */}
                  {["Layouts", "Mailbox", "UI Elements", "Pages", "Maps"].includes(item.name) && (
                    <span className="ml-auto text-gray-400">*</span>
                    )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
            <Grid className="text-gray-500 cursor-pointer" size={20} />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-700">
              <span className="relative flex items-center">
                <span className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" />
                <span>Johnathan Doe</span>
              </span>
              <ChevronDown size={16} />
            </div>
            <Moon className="text-gray-500 cursor-pointer" size={20} />
            <div className="relative">
              <Bell className="text-gray-500 cursor-pointer" size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <Settings className="text-gray-500 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-slate-200">
  <div className="text-3xl font-semibold text-gray-700 mb-6">
    <h1>Dashboard</h1>
  </div>
  
  <div className="grid grid-cols-12 gap-6">
    {/* Stats Cards */}
    <div className="col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {statsCards.map((card, index) => (
        <div
          key={card.title}
          className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
          style={{ gridRow: index < 2 ? "1" : "2" }} // Set gridRow for positioning
        >
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              {card.title}
            </h3>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            <p className="text-gray-500 text-sm mt-1">
              Power Consumption
            </p>
            <p className="text-gray-900 font-semibold">{card.consumption}</p>
          </div>
          <div className={`${card.iconBg} rounded-full p-3 flex items-center justify-center`}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>


            {/* Average Power Consumption Chart */}
              {/* Average Power Consumption Chart */}
    <div className="col-span-12 lg:col-span-8">
      <div className="bg-white rounded-lg shadow-sm p-6 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-gray-700">Average Power Consumption (kw/h)</h3>
          <select className="border rounded-lg px-3 py-1 text-sm text-gray-600">
            <option>This Week</option>
          </select>
        </div>
        <div className="h-48">
          <ResponsiveContainer>
            <LineChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: "#2563eb", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Power Consumption Profile */}
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-gray-700">Power Consumption</h3>
                  <button className="text-gray-400">•••</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Heater</p>
                    <p className="text-2xl font-semibold mb-4">2,095</p>
                    <div className="h-24">
                      <ResponsiveContainer>
                        <BarChart
                          data={[{ value: 70 }, { value: 60 }, { value: 80 }]}
                        >
                          <Bar dataKey="value" fill="#e0e7ff" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xl font-semibold">17%</span>
                          <p className="text-sm text-gray-500">used</p>
                        </div>
                      </div>
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="#e0e7ff"
                          strokeWidth="12"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="#818cf8"
                          strokeWidth="12"
                          strokeDasharray="352"
                          strokeDashoffset="292"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Lights</p>
                    <p className="text-2xl font-semibold mb-4">2,360</p>
                    <div className="h-24">
                      <ResponsiveContainer>
                        <BarChart
                          data={[{ value: 60 }, { value: 80 }, { value: 70 }]}
                        >
                          <Bar dataKey="value" fill="#fee2e2" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Power Consumption */}
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-gray-700 mb-6">
                  Current Power Consumption (kW/h)
                </h3>
                <p className="text-4xl font-semibold text-blue-600 mb-6">
                  1635.00
                </p>
                <div className="h-48">
                  <ResponsiveContainer>
                    <BarChart
                      data={Array(15)
                        .fill()
                        .map(() => ({
                          value: Math.floor(
                            Math.random() * (1800 - 1400) + 1400
                          ),
                        }))}
                    >
                      <Bar dataKey="value" fill="#06b6d4" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerDashboard;
