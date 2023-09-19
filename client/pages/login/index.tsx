/* eslint-disable react-hooks/exhaustive-deps */
import LoginForm from "@/components/LoginForm";
import { useAuthContext } from "@/hooks/useAuthContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));


const LoginPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { user, dispatch, loading } = useAuthContext();
  useEffect(() => {
    if (!loading && user?.role === "ADMIN") router.push('/admin/dashboard')
    else if (!loading && user) router.push('/user/dashboard')
  }, [user, loading]);

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

export default LoginPage
