import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import TeacherTabs from "../components/TeacherTabs";
const Teachers = () => {
  // eslint-disable-next-line
  const [teachers, setTeachers] = useState([]);
  //get all teachers data
  const getAllTeachers = async (req, res) => {
    try {
      const res = await axios.get("/api/v1/user/getAllTeachers");
      if (res.data.success) {
        setTeachers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTeachers();
  }, []);
  return (
    <Layout>
      <div>
        <h1 className="text-center">Teachers</h1>
        <TeacherTabs teachers />
      </div>
    </Layout>
  );
};

export default Teachers;
