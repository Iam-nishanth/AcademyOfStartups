/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import { useAuthContext } from "@/hooks/useAuthContext";
import SignupSection from "@/views/SignupSection";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));


const LoginPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { user, business, dispatch, loading } = useAuthContext();
  useEffect(() => {
    if (!loading && user?.role === "ADMIN") router.push('/admin/dashboard')
    else if (!loading && user && !business) router.push({ pathname: '/add-business', query: { email: user.userEmail } })
    else if (!loading && user && business) router.push({ pathname: '/user/dashboard', query: { from: 'redirect' } });
  }, [user, loading]);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <SignupSection />
      <Footer />
    </main>
  );
}

export default LoginPage
