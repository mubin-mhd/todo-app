import React from "react";
import Chips from "../../components/atoms/Chips";
import Text from "../../components/atoms/Text";
import ButtonAddGroup from "../../components/atoms/ButtonAddGroup";
import ButtonAddTask from "../../components/atoms/ButtonAddTask";

const Dashboard = () => {
  return (
    <div>
      <Chips label="Group Taks 1" variant="danger" />
      <Text
        label="Re-designed the zero-g doggie bags. No more spills!"
        variant="medium-bold"
      />
      <ButtonAddGroup label="Add New Group" />
      <ButtonAddTask label="Add Task" />
    </div>
  );
};

export default Dashboard;
