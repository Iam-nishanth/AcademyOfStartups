import axios from "axios";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
import { useRouter } from "next/router";
import { message } from "antd";

interface User {
  id: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Startup {
  id: string;
  businessEmail: string;
  name: string;
  phoneNo: string;
  businessName: string;
  businessCategory: string;
  registrationType: string;
  productOrService: string;
  incNo: string;
  companyWebsite: string;
  panNo: string;
  gstNo: string;
  itrPerYear: string;
  address: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UserData {
  user: User;
  startup: Startup;
}

const UserPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [data, setData] = useState<UserData | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<UserData>(
          "http://localhost:8080/users",
          { username }
        );
        setData(response.data);
        // Process the response here
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [username]);

  const logout = async (userId: string) => {
    try {
      const response = await axios.delete('http://localhost:8080/auth/logout', {
          data: { userId },
      });

      if (response.status === 204) {
          message.success('Logout Successful');
          router.push('/');
      } else {
          message.error('Logout Failed');
      }
    } catch (error) {
      console.error(error);
      message.error('Logout Failed');
    }
  };

  return (

    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />


    <div id="user">
      <h1>{data && data.startup.businessName}</h1>
      <button onClick={() => data && logout(data.user.id)}>Logout</button>
    </div>
    </main>
  );
};

export default UserPage;
