import { Tabs } from "antd";
import React from "react";
import { items } from "../Data/data";

const TeacherTabs = (children) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  );
};

export default TeacherTabs;
