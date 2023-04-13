import {
  createTask,
  deleteTask,
  getTaskList,
  updateStatus,
  updateTask,
} from "../api/taskApi";

const SET_TASK = "task/SET_TASK";
const EDIT_TASK = "task/EDIT_TASK";
const DELETE_TASK = "task/DELETE_TASK";
const UPDATE_STATUS = "task/UPDATE_STATUS";
const SET_TASK_LIST = "task/SET_TASK_LIST";

const setTask = (taskName, creationTime, status) => ({
  type: SET_TASK,
  payload: { taskName, creationTime, status },
});

const editTask = (taskName) => ({
  type: EDIT_TASK,
  payload: taskName,
});

const deleteTaskAction = (taskName) => ({
  type: DELETE_TASK,
  payload: taskName,
});

const editStatus = (taskName, newStatus) => ({
  type: UPDATE_STATUS,
  payload: { taskName, newStatus },
});

const setTaskList = (tasks) => ({
  type: SET_TASK_LIST,
  payload: tasks,
});

export const submitTask = (taskName) => async (dispatch) => {
  try {
    const data = await createTask(taskName);
    dispatch(setTask(data.taskName, data.creationTime, data.status));
  } catch (error) {
    console.log(error);
  }
};

export const updateTaskAction = (oldName, newName) => async (dispatch) => {
  try {
    const data = await updateTask(oldName, newName);
    dispatch(editTask({ oldName, newName: data.taskName }));
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = (taskName) => async (dispatch) => {
  try {
    await deleteTask(taskName);
    dispatch(deleteTaskAction(taskName));
  } catch (error) {
    console.log(error);
  }
};

export const updateStatusAction = (taskName, newStatus) => async (dispatch) => {
  try {
    const data = await editStatus(taskName, newStatus);
    dispatch(updateStatus(data.taskName, data.status));
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserTasks = (userId) => async (dispatch) => {
  try {
    const data = await setTaskList(userId);
    dispatch(getTaskList(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  taskNames: [
    {
      taskName: "abc",
      creationTime: "오후 9시",
      status: "first",
    },
    {
      taskName: "def",
      creationTime: "오후 10시",
      status: "second",
    },
  ],
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        taskNames: [...state.taskNames, action.payload],
      };
    case EDIT_TASK:
      const { oldName, newName } = action.payload;
      return {
        ...state,
        taskNames: state.taskNames.map((task) =>
          task === oldName ? newName : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskNames: state.taskNames.filter((task) => task !== action.payload),
      };
    case UPDATE_STATUS:
      const { taskName, newStatus } = action.payload;
      return {
        ...state,
        taskNames: state.taskNames.map((task) =>
          task.taskName === taskName ? { ...task, status: newStatus } : task
        ),
      };
    case SET_TASK_LIST:
      return {
        ...state,
        taskNames: action.payload,
      };
    default:
      return state;
  }
};

export default task;
