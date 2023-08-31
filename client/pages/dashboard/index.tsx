import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const DashBoardSection = dynamic(() => import("@/views/DashBoardSection"));
import { useRouter } from "next/router";
import { useAuthContext } from "@/hooks/useAuthContext";
import withAuth from "../../components/HighOrders/WithAuth";




const DashBoard = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user, dispatch, loading } = useAuthContext();

  // useEffect(() => {
  //   console.log('rerender')
  //   if (!loading && !user) router.push('/login')
  // }, [user, loading, router.isReady]);

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
    router.push('/')
  }
  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (

    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <DashBoardSection />
    </main>
  );
};

export default DashBoard;
