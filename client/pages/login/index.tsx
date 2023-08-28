import LoginForm from "@/components/LoginForm";
import { useAuthContext } from "@/hooks/useAuthContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
import SignedIn from "../../components/HighOrders/SignedIn";


const LoginPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <LoginForm />
    </main>
  );
}

export default SignedIn(LoginPage)
