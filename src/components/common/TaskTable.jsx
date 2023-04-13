import { useDispatch, useSelector } from "react-redux";

const TaskTable = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskNames);

  return (
    <table>
      <thead>
        <tr>
          <th>TaskName</th>
          <th>CreationTime</th>
          <th>Status</th>
          <th>Manage</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task) => (
          <tr key={task.taskName}>
            <td>{task.taskName}</td>
            <td>{task.creationTime}</td>
            <td>{task.status}</td>
            <td>
              <button>
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </td>
            <td>
              <button>
                <span className="material-symbols-outlined">edit</span>
              </button>
            </td>
            <td>
              <button>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
