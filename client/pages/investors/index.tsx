/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));
import InvestorSection from "@/views/InvestorSection";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useAuthContext } from "@/hooks/useAuthContext";
import { message } from "antd";



const InvestorsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { investorData, loading } = useAuthContext();

  useEffect(() => {

    // if (!loading && investorData == null || undefined) router.push('/investors')
    // if (!loading && investorData) router.push('/investors/dashboard')
  }, [loading, investorData])


  const BodyRef = useRef<HTMLElement>();
  const [NavBackground, setNavBackground] = useState<boolean>(false);

  const ScrollHandler = (): void => {
    console.log('scrolling');
    if (BodyRef.current) {
      BodyRef.current.scrollTop >= 30
        ? setNavBackground(true)
        : setNavBackground(false);
    }
  };

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <InvestorSection />
      <Footer />
    </main>
  );
}


export default InvestorsPage;