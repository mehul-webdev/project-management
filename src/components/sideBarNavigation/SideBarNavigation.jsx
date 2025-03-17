import React from "react";
import { Home, Menu, Settings, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

import { NavLink } from "react-router-dom";
import { FiFilePlus } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";

const SideBarNavigation = () => {
  const { sidebar } = useSelector((state) => state.ui);

  const menuItems = [
    { id: 1, title: "Dashboard", icon: <MdOutlineDashboard />, url: "/" },
    {
      id: 2,
      title: "Create Project",
      icon: <FiFilePlus size={24} />,
      url: "/create-project",
    },
    {
      id: 3,
      title: "Projects",
      icon: <GoProjectSymlink size={24} />,
      url: "/projects",
    },
  ];

  return (
    <div
      className={`bg-[var(--navigation)] h-[calc(100vh-80px)] p-4 flex flex-col transition-all duration-300 ${
        sidebar ? "w-56" : "w-16"
      } border-r-2`}
    >
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`relative flex items-center p-2 rounded transition group hover:bg-foreground hover:text-background hover:cursor-pointer whitespace-nowrap ${
              sidebar ? "justify-start" : "justify-center"
            }`}
          >
            <NavLink
              to={item.url}
              className="flex items-center justify-center "
            >
              <span className="text-2xl">{item.icon}</span>
              {sidebar && <span className="ml-5 text-lg ">{item.title}</span>}

              {!sidebar && (
                <span className="absolute max-w-max left-10 bg-background text-white text-sm px-2 py-2 rounded hidden group-hover:block group-hover:bg-foreground group-hover:text-background transition duration-300 whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarNavigation;
