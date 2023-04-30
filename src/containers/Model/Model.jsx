import { useEffect, useState } from "react";

import axios from "axios";
import TaskManagementForm from "../../components/common/TaskManagementForm";

// export const tasks = [
//   {
//     name: "Select a task",
//   },
//   {
//     name: "Image Classification",
//   },
//   {
//     name: "Object Detection",
//   },
//   {
//     name: "Semantic Segmentation",
//   },
//   {
//     name: "Instance Segmentation",
//   },
//   {
//     name: "Other",
//   },
// ];

const Model = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.123.2:6800/get_user_model/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data && response.data.length > 0) {
          setData(response.data);

          console.log(response);
        } else {
          console.log("no");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <TaskManagementForm data={data} setData={setData} />;
};

export default Model;
