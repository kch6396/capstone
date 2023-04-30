import CreateTask from "./CreateTask";
import Header from "./Header";

const CreateTaskForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Header />
      <CreateTask />
    </div>
  );
};

export default CreateTaskForm;
