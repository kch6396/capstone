import { useCallback, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { tasks } from "../../containers/common/CreateTaskContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/model";

export const CreateTaskContainer = styled.div`
  padding: 8px 15px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;
export const Span = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-left: 20px;
  color: #760b87;
  margin-top: 8px;
`;

export const CreateTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin: 16px 0;
  padding: 20px;
  background-color: white;
  min-width: 215px;
  height: 100%;
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border: none;
  outline: 1px solid #aaa;
  border-radius: 3px;
  font-size: 16px;
  width: 40vw;
  min-width: 191px;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: 2px solid #760b87;
  }
`;

export const Text = styled.textarea`
  padding: 0.5rem 0.75rem;
  border: none;
  outline: 1px solid #aaa;
  border-radius: 3px;
  font-size: 16px;
  width: 40vw;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  resize: none;
  height: 50px;
  min-width: 191px;
  /* margin-bottom: 1.5rem; */
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: 2px solid #760b87;
  }
`;

export const MainTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
`;

export const RedCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3px;
`;

export const RedCircle = styled.div`
  width: 5px;
  height: 5px;
  background-color: #ff0000;
  border-radius: 10px;
`;

export const SelectTaskContainer = styled.div`
  outline: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  width: 15vw;
  cursor: pointer;
  padding: 0.2rem 0 0.2rem 0.75rem;
  border-radius: 3px;
  line-height: 23px;
  min-width: 72.395px;
  min-width: 203px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:focus {
    outline: 2px solid #760b87;
  }
`;

export const TaskLi = styled.li`
  width: 15vw;
  min-width: 203px;
  padding: 0.3rem 0px 0.3rem 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #7b25a7;
    color: white;
  }
`;

export const Ul = styled.ul`
  border: none;
  outline: 1px solid #aaa;
  background-color: white;
  padding: 0;
  position: absolute;
  margin: 0;
  border-radius: 3px;
  margin-top: 3px;
  z-index: 1;
`;

export const FileContainer = styled.div`
  outline: 1px solid #aaa;
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  width: 40vw;
  position: relative;
  min-width: 191px;
  a:hover {
    text-decoration: underline;
  }
`;

export const FileLabel = styled.label`
  color: #aaa;
  outline: 1px solid #aaa;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-weight: 500;
  z-index: 1;
  background-color: white;
  border-radius: 0 3px 3px 0;
  height: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: #760b87;
  }
  &::placeholder {
    white-space: normal;
  }
`;

export const UploadBtn = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  color: white;
  transition: all 0.4s;
  background-color: ${({ disabled }) => (disabled ? "#aaa" : "#760b87")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  outline: ${({ disabled }) =>
    disabled ? "1px solid #aaa" : "1px solid #760b87"};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-top: 10px; */
  min-width: 191px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CancelBtn = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  color: white;
  background-color: #e24444;
  outline: 1px solid #e24444;
  cursor: pointer;
`;

export const Warning = styled.div`
  margin-bottom: 0.75rem;
  margin-top: 0.25rem;
  color: red;
  font-size: 12px;
  font-weight: 500;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 37px;
  border-radius: 5px;
  border: none;
  background-color: ${({ progress }) => (progress !== 0 ? "#eee" : "none")};
  flex-grow: 1;
  margin-right: 20px;
  @media (max-width: 450px) {
    margin-right: 0px;
    margin-bottom: 10px;
    display: ${({ progress }) => (progress !== 0 ? "block" : "none")};
  }
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => progress};
  border: none;
  height: 100%;
  background-color: #760b87b5;
  border-radius: 5px;
  position: absolute;
`;

export const ProgressText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

export const Caution = styled.div`
  padding: 0.75rem;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #760b8710;
  color: #760b87b5;
  display: flex;
  .material-symbols-outlined {
    margin-right: 0.5rem;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
    padding: 0.2rem 0 0.5rem 0;
  }
  li {
    font-size: 13px;
    list-style: none;
    &::before {
      content: "•";
      font-size: 20px;
      display: inline-block;
      margin-right: 5px;
    }
  }
`;
const CreateTask = () => {
  const [selectTask, setSelectTask] = useState(false);
  const selectTaskRef = useRef(null);
  const selectTaskContainerRef = useRef(null);
  const [selectedTask, setSelectedTask] = useState("Select a task");
  const [modelName, setModelName] = useState("");
  const [memo, setMemo] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [cancelBtn, setCancelBtn] = useState(false);
  const [data, setData] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [memoLen, setMemoLen] = useState(false);

  const navigate = useNavigate();

  const { CancelToken } = axios;
  const cancelTokenSource = useRef(null);

  const handleClickOutside = (event) => {
    if (
      selectTaskRef.current &&
      !selectTaskRef.current.contains(event.target) &&
      selectTaskContainerRef.current &&
      !selectTaskContainerRef.current.contains(event.target)
    ) {
      setSelectTask(false);
    }
  };

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
        } else {
          console.log("no");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    setSelectTask(false);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    console.log(uploadedFile);

    if (uploadedFile) {
      setFile(uploadedFile);
      setFileUrl(URL.createObjectURL(uploadedFile));
      setFileSize(uploadedFile.size);
      console.log(uploadedFile);
    }
  };

  const Submit = async (e) => {
    e.preventDefault();

    cancelTokenSource.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_name", modelName);
    formData.append("file_name", file.name);
    formData.append("memo", memo);
    formData.append("task", selectedTask);
    formData.append("size", `${(fileSize / 1024).toFixed(2)}KB`);

    try {
      const response = await axios.post(
        `http://192.168.123.2:6800/upload_user_model/?model_name=${modelName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.round((loaded / total) * 100);
            setProgress(percentage);
            if (progressEvent) {
              setCancelBtn(true);
            } else {
              setCancelBtn(false);
            }
          },
          cancelToken: cancelTokenSource.current.token,
        }
      );

      if (response.status === 200) {
        console.log(response);
        navigate("/models");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    if (cancelTokenSource.current) {
      if (window.confirm("Are you sure you wnat to cancel?")) {
        cancelTokenSource.current.cancel();
        setCancelBtn(false);
        setProgress(0);
      } else {
        return;
      }
    }
  };

  const handleChange = (e) => {
    setModelName(e.target.value);
    if (data.find((item) => item.model_name === e.target.value)) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  };

  return (
    <CreateTaskContainer>
      <Span>Upload Model</Span>
      <CreateTaskForm onSubmit={Submit}>
        <div>
          <MainTitle>Model Info</MainTitle>
          <SubTitle>
            <div style={{ display: "flex" }}>
              <RedCircleContainer>
                <RedCircle />
              </RedCircleContainer>
              Model name
            </div>
          </SubTitle>
          <Input
            placeholder="Model name"
            required
            value={modelName}
            onChange={handleChange}
            spellCheck={false}
          />
          {modelName.length === 0 ? (
            <Warning>Please write model name</Warning>
          ) : !isDuplicate ? (
            <div style={{ marginBottom: "0.75rem" }} />
          ) : (
            <Warning>
              Model name already exists. Please enter a different name.
            </Warning>
          )}
          <SubTitle>Memo</SubTitle>
          <Text
            placeholder="Simple explanation for this model within 100 characters"
            value={memo}
            onChange={(e) => {
              setMemo(e.target.value);
              if (e.target.value.length > 100) {
                setMemoLen(true);
              } else {
                setMemoLen(false);
              }
            }}
            spellCheck={false}
          />
          {memoLen ? (
            <Warning style={{ marginBottom: "1.5rem" }}>
              Your input exceeds the maximum length of 100 characters.
            </Warning>
          ) : (
            <div style={{ marginBottom: "1.5rem" }} />
          )}
          <SubTitle>
            <div style={{ display: "flex" }}>
              <RedCircleContainer>
                <RedCircle />
              </RedCircleContainer>
              Task
            </div>
          </SubTitle>
          <SelectTaskContainer
            onClick={() => {
              if (!selectTask) {
                selectTaskRef.current.focus();
              } else {
                selectTaskRef.current.blur();
              }
              setSelectTask(!selectTask);
            }}
            ref={selectTaskRef}
            tabIndex="0"
          >
            <span>{selectedTask}</span>
            <span className="material-symbols-outlined">expand_more</span>
          </SelectTaskContainer>
          {selectTask && (
            <div
              ref={selectTaskContainerRef}
              style={{ position: "relative", width: "100%" }}
            >
              <Ul>
                {tasks.map((task, index) => (
                  <TaskLi
                    key={index}
                    onClick={() => handleTaskSelection(task.name)}
                  >
                    {task.name}
                  </TaskLi>
                ))}
              </Ul>
            </div>
          )}
          {selectedTask === "Select a task" && (
            <Warning>Please select a task</Warning>
          )}
          <MainTitle style={{ marginTop: "3rem" }}>Model file</MainTitle>
          <SubTitle>
            <div style={{ display: "flex" }}>
              <RedCircleContainer>
                <RedCircle />
              </RedCircleContainer>
              Upload model file
            </div>
          </SubTitle>
          <Caution>
            <span className="material-symbols-outlined">error</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Caution</h2>
              <li>
                Please choose a compressed file with an extension that is one of
                the following
              </li>
              <li>
                {" "}
                : .zip, .rar, .7z, .tar, .gz, .bz2, .xz, .iso, .cab, .tgz, .tbz,
                .Z, .arj, .sit, .sitx, .lzh, .lha, .ace, .jar.
              </li>
            </div>
          </Caution>
          <FileContainer>
            {file ? (
              <div
                style={{
                  fontWeight: "500",
                  overflow: "hidden",
                  width: "calc(100% - 78px)",
                  position: "relative",
                }}
              >
                <a href={fileUrl} download style={{ width: "100%" }}>
                  {file.name}
                </a>{" "}
                ({(fileSize / 1024).toFixed(2)} KB)
              </div>
            ) : (
              <div style={{ color: "#aaa" }}>Select compressed file</div>
            )}
            <FileLabel htmlFor="file">Browse</FileLabel>
            <input
              style={{ display: "none" }}
              id="file"
              type="file"
              required
              onChange={handleFileUpload}
            />
          </FileContainer>
          {!file ? (
            <Warning style={{ marginBottom: "3.75rem" }}>
              This field is required.
            </Warning>
          ) : (
            <div style={{ marginBottom: "3.75rem" }} />
          )}
        </div>

        <div style={{ borderTop: "1px solid #ddd", paddingTop: "0.5rem" }}>
          <Caution>
            <span className="material-symbols-outlined">error</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Caution</h2>
              <li>
                Please do not leave the current page even if the progress
                reaches 100%.
              </li>{" "}
              <li>Wait for a moment, and the upload will be completed.</li>
              <li>
                {" "}
                If you leave the page midway, the model upload will be
                interrupted.
              </li>
            </div>
          </Caution>
          <BtnContainer
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
              minWidth: "191px",
            }}
          >
            <ProgressBarContainer progress={progress}>
              <ProgressBar progress={`${progress}%`}>
                <ProgressText>
                  {progress !== 100
                    ? `${progress}%`
                    : "Please wait a moment. The model upload will be completed soon."}
                </ProgressText>
              </ProgressBar>
            </ProgressBarContainer>
            {!cancelBtn ? (
              <UploadBtn
                disabled={
                  !file ||
                  modelName.length === 0 ||
                  selectedTask === "Select a task" ||
                  isDuplicate
                    ? true
                    : false
                }
                type="submit"
              >
                Start upload
              </UploadBtn>
            ) : (
              <CancelBtn onClick={handleCancelClick} type="button">
                Cancel upload
              </CancelBtn>
            )}
          </BtnContainer>
        </div>
      </CreateTaskForm>
    </CreateTaskContainer>
  );
};

export default CreateTask;
