import CreateTaskBtn from "./CreateTaskBtn";
import Header from "./Header";
import TaskTable from "./TaskTable";

const TaskManagementForm = ({ data, setData }) => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <CreateTaskBtn />
      <TaskTable data={data} setData={setData} />
    </div>
  );
};

export default TaskManagementForm;
