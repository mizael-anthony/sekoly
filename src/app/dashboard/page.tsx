"use client";

import { useState } from "react";
import { Sidebar, Button } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiUser,
  HiViewBoards,
  HiOutlineUserGroup,
  HiMenu,
  HiX
} from "react-icons/hi";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     <h1>Dashboard</h1>
    </>
  );
}
