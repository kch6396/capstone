import axios from "axios";

export const fetchData = async () => {
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
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};
