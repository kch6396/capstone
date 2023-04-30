import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

const Dataset = () => {
  const [dataName, setDataName] = useState("");
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [fileSize, setFileSize] = useState(null);
  const [datas, setDatas] = useState([]);
  const fileInputRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.123.2:6800/get_user_data/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data && response.data.length > 0) {
        setDatas(response.data);

        console.log(response);
      } else {
        console.log("no");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_name", dataName);
    formData.append("size", `${(fileSize / 1024).toFixed(2)}KB`);

    try {
      const response = await axios.post(
        `http://192.168.123.2:6800/upload_user_data/?data_name=${dataName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.round((loaded / total) * 100);
            setProgress(percentage);
            console.log(`Upload progress: ${percentage}%`);
            // if (progressEvent) {
            //   setCancelBtn(true);
            // } else {
            //   setCancelBtn(false);
            // }
          },
          // cancelToken: cancelTokenSource.current.token,
        }
      );

      if (response.status === 200) {
        console.log(response);
        fetchData();
        if (response.data) {
          setDatas((prevDatas) => [...prevDatas, response.data]);
          setDataName("");
          setFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
        // navigate("/models");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    console.log(uploadedFile);

    if (uploadedFile) {
      setFile(uploadedFile);
      // setFileUrl(URL.createObjectURL(uploadedFile));
      setFileSize(uploadedFile.size);
      console.log(uploadedFile);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={Submit}>
        <input value={dataName} onChange={(e) => setDataName(e.target.value)} />
        <input type="file" onChange={handleFileUpload} ref={fileInputRef} />
        <button type="submit">생성</button>
        {datas.map((data, index) => (
          <div key={index}>
            <div>{data.data_name}</div>
            <div>{data.upload_time}</div>
            <div>{data.filename}</div>
            <div style={{ marginBottom: "20px" }}>{data.size}</div>
          </div>
        ))}
      </form>
    </>
  );
};

export default Dataset;
