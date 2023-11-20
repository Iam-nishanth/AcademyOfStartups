/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Full";
import { useAuthContext } from "@/hooks/useAuthContext";
import SignupSection from "@/views/SignupSection";



const LoginPage = () => {
  const router = useRouter();
  const { user, business, loading } = useAuthContext();
  React.useEffect(() => {
    if (!loading && user?.role === "ADMIN") router.push({ pathname: '/admin/dashboard', query: { from: 'redirect' } })
    else if (!loading && user && !business) router.push({ pathname: '/user/add-business', query: { email: user.userEmail } })
    else if (!loading && user && business) router.push({ pathname: '/user/dashboard', query: { from: 'redirect' } });
  }, [user, loading]);


  return (
    <Layout title="Login | Academy of Startups" secure={true}>
      <SignupSection />
    </Layout>
  );
}

export default LoginPage
