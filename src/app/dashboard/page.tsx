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
} from "react-icons/hi";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 sm:hidden`}
      >
        <HiMenu className="w-5 h-5" />
      </Button>
      <Sidebar className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
        <Sidebar.Logo
          href="#"
          img="https://flowbite.com/docs/images/logo.svg"
          imgAlt="Flowbite logo"
        >
          Sekoly
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiOutlineUserGroup}
              label="Pro"
              labelColor="dark"
            >
              Teachers
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Subjects
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Classes
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
