import CreateTaskBtn from "./CreateTaskBtn";
import Header from "./Header";
import TaskTable from "./TaskTable";

const HomeForm = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <CreateTaskBtn />
      <TaskTable />
    </div>
  );
};

export default HomeForm;
