import dynamic from "next/dynamic";
import React from "react";
const DashBoardSection = dynamic(() => import("@/views/DashBoardSection"));
import WithAuth from '@/components/HighOrders/WithAuth'
import BackButton from '@/components/BackButton'
import { useAuthContext } from "@/hooks/useAuthContext";




const DashBoard = () => {
  const { user } = useAuthContext();

  const capitalizeFirstLetter = (word: string): string => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;

  return (
    <main>
      <BackButton dropdown={true} user={DisplayName} />
      <DashBoardSection />
    </main>
  );
};

export default WithAuth(DashBoard);