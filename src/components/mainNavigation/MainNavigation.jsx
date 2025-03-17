import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/project-management-logo.png";
import DummyProfile from "../../assets/dummy-profile.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

import { Button } from "../ui/button";
import { FaRegUser } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { BiMoon } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const MainNavigation = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const navigate = useNavigate();

  function handleLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/auth/sign-in", { replace: true });
      })
      .catch((error) => {
        console.log("Error while logout", error);
      });
  }

  function toggleSidebar() {
    dispatch(uiActions.toggleSidebar());
  }

  return (
    <header className="px-4 py-3 md:px-4 md:py-4 shadow-xs bg-[var(--navigation)] border-b-2">
      <nav className="flex gap-8 items-center justify-between">
        <div className="flex items-center gap-8">
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
          <img src={Logo} alt="logo" className="h-[45px]" />
        </div>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 rounded-full">
                <Avatar>
                  <AvatarImage
                    src={`https://lh3.googleusercontent.com/a/ACg8ocKbPHjGC9QMYeX8WXw8UOQNoDei1dWQbHsbm6QK1sDnz-2iXQ=s96-c`}
                    alt="user profile"
                  />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <FaRegUser /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleThemeChange}
              >
                {theme === "dark" ? <BiMoon /> : <GoSun />}
                Toggle Theme
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer text-red-500"
                onClick={handleLogout}
              >
                <CiLogout className="text-red-500" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
