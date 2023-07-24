import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
const HomePage = () => {
  //login userdata
  const getUserData = async (req, res) => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <div>
        <h1>Anokhi Pehel Home Page</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
