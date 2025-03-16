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

const MainNavigation = () => {
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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

  return (
    <header className="px-4 py-3 md:px-8 md:py-4 shadow-xl bg-background">
      <nav className="flex gap-4 items-center justify-between">
        {/* Left Side - Logo & Menu */}
        <div className="flex items-center gap-4">
          <RxHamburgerMenu className="text-3xl block md:hidden cursor-pointer" />
          <img src={Logo} alt="logo" className="h-[45px]" />
        </div>

        {/* Right Side - Avatar & Dropdown */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 rounded-full">
                <Avatar>
                  <AvatarImage src={DummyProfile} alt="user profile" />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Toggle Theme
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer text-red-500"
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
