import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchData } from "../../api/model";

const TableContainer = styled.div`
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: center; */
  background-color: #f7f7f7;
  padding: 0 18px;
`;

const Table = styled.table`
  white-space: nowrap;
  position: relative;
  /* outline: 1px solid #eee; */
  border-radius: 5px;
  border: none;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

const Thead = styled.thead`
  #Th1 {
    text-align: left;
    padding-left: 60px;
  }
  #Th2 {
    text-align: left;
  }
  #Th3 {
    text-align: left;
  }
  #Th4 {
    text-align: left;
  }
  tr {
    border-bottom: 1px solid #eee;
  }
`;

const Th = styled.th`
  width: ${(props) => props.width}%;
  padding: 10px 10px;
  font-size: 12px;
  color: #aaa;
  font-weight: bold;
`;

const Tbody = styled.tbody`
  td {
    padding: 25px 10px;
    text-align: center;
    vertical-align: middle;
    color: #333;
    font-size: 14px;
    font-weight: 500;
  }
  #Td1 {
    padding-left: 60px;
    text-align: left;
    /* display: flex;
    align-items: center; */
    font-weight: 600;
    color: #670b87;
    font-size: 16px;
  }
  #Td2 {
    padding: 25px 10px;
    text-align: left;
  }
  #Td3 {
    padding: 25px 10px;
    text-align: left;
  }
  #Td4 {
    padding: 25px 10px;
    text-align: left;
  }
  /* tr:not(:first-of-type) {
    border-top: 1px solid #eee;
  } */
  #question {
    font-size: 25px;
    padding-top: 1px;
    color: #aaa;
    cursor: default;
    &:hover {
      color: #670b87;
    }
  }
`;

const Button = styled.button`
  border: 2px solid #760b87;
  border-radius: 5px;
  padding: 3px 5px;
  background-color: white;
  color: #760b87;
  transition: all 0.3s;
  /* display: flex;
  flex-direction: column; */
  &:hover {
    background-color: #760b87;
    color: white;
  }
`;

const ButtonSpan = styled.span`
  border: none;
  outline: none;
`;

const TaskTable = ({ data, setData }) => {
  const [edit, setEdit] = useState(-1);
  const [editName, setEditName] = useState("");
  const [editMemo, setEditMemo] = useState("");
  const [onMemo, setOnMemo] = useState([]);
  const editInputRef = useRef(null);

  const Edit = (index, modelName, memo) => {
    // if (editInputRef.current) {
    // editInputRef.current.focus();
    // }
    if (index === edit) {
      setEdit(-1);
      // setOnMemo((prevArray) => prevArray.filter((item) => item !== index));
      return;
    }
    setEditName(modelName);
    setEditMemo(memo);
    setEdit(index);

    if (!onMemo.includes(index)) {
      memoClick(index);
    }
  };

  const handleEsc = (event) => {
    if (edit !== -1)
      if (event.key === "Escape") {
        setEdit(-1);
        // 원하는 동작을 여기에 작성하세요.
      }
  };

  useEffect(() => {
    if (edit !== -1 && editInputRef.current) {
      editInputRef.current?.focus();
    }
    window.addEventListener("keydown", handleEsc);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [edit]);

  const EditCommunication = async (
    index,
    modelname,
    memo,
    editName,
    editMemo,
    event
  ) => {
    if (event.key === "Enter") {
      if (editName.length === 0) {
        alert("Please write model name");
        return;
      }
      try {
        const response = await axios.put(
          `http://192.168.123.2:6800/update_user_model/?model_name=${modelname}&new_model_name=${editName}&memo=${memo}`,
          { model_name: modelname, new_model_name: editName, memo },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          const newData = [...data];
          newData[index] = {
            ...newData[index],
            model_name: editName,
            memo: editMemo,
          };
          setData(newData);
          setEdit(-1);
          // setOnMemo((prevArray) => prevArray.filter((item) => item !== index));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const DeleteCommunication = async (modelName) => {
    try {
      const response = await axios.delete(
        `http://192.168.123.2:6800/delete_user_model/?model_name=${modelName}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const newData = data.filter((item) => item.model_name !== modelName);
        setData(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const memoClick = (index) => {
    if (!onMemo.includes(index)) {
      setOnMemo((prevArray) => [...prevArray, index]);
    } else if (onMemo.includes(index)) {
      setOnMemo((prevArray) => prevArray.filter((item) => item !== index));
    }
  };

  return (
    <TableContainer>
      {data.length !== 0 ? (
        <Table>
          <Thead>
            <tr>
              {/* <th style={{ paddingRight: "0" }} id="Q"></th> */}
              <Th width={27} id="Th1">
                Model name
              </Th>
              <Th width={19} id="Th2">
                File
              </Th>
              <Th width={19} id="Th3">
                Task
              </Th>
              <Th width={19} id="Th4">
                Creation time
              </Th>
              <Th width={4} style={{ padding: 0 }} id="EmptyTh" />
              <Th width={3} style={{ padding: "10px" }} id="Th5">
                Memo
              </Th>
              <Th width={3} style={{ padding: "10px" }} id="Th6">
                Edit
              </Th>
              <Th
                width={3}
                style={{ paddingRight: "60px", paddingLeft: "10px" }}
                id="Th7"
              >
                Remove
              </Th>
            </tr>
          </Thead>
          {data.map((model, index) => (
            <Tbody key={index}>
              <tr style={{ borderTop: " 1px solid #eee" }}>
                {/* <td
                  style={{
                    padding: "25px 10px",
                    paddingLeft: "30px",
                    paddingRight: "0",
                  }}
                >
                  <span
                    id="question"
                    className="material-symbols-outlined"
                    onMouseEnter={() => setOnMemo(true)}
                    onMouseLeave={() => setOnMemo(false)}
                  >
                    help
                  </span>
                  {onMemo && <Memo>hihihi</Memo>}
                </td> */}
                <td id="Td1">
                  {model.model_name}
                  {edit === index && (
                    <>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        style={{
                          position: "absolute",
                          left: "60px",
                          padding: "5px",
                          border: "1px solid #bbb",
                          zIndex: "10",
                          fontSize: "14px",
                          borderRadius: "3px",
                        }}
                        onKeyDown={(event) =>
                          EditCommunication(
                            index,
                            model.model_name,
                            model.memo,
                            editName,
                            editMemo,
                            event
                          )
                        }
                        ref={editInputRef}
                        onFocus={(e) => e.target.select()}
                      />
                    </>
                  )}
                  {/* <button
                        style={{
                          position: "absolute",
                          left: "240px",
                          padding: "5px",
                          border: "1px solid #bbb",
                          zIndex: "10",
                        }}
                        onClick={() =>
                          EditCommunication(
                            index,
                            model.model_name,
                            editName,
                            model.memo
                          )
                        }
                      >
                        eidt
                      </button>
                      <button
                        style={{
                          position: "absolute",
                          left: "240px",
                          padding: "5px",
                          border: "1px solid #bbb",
                          zIndex: "10",
                        }}
                        onClick={() =>
                          EditCommunication(
                            index,
                            model.model_name,
                            editName,
                            model.memo
                          )
                        }
                      >
                        eidt
                      </button> */}
                </td>

                <td id="Td2">
                  {model.filename}
                  <div
                    style={{
                      marginTop: "5px",
                      fontSize: "12px",
                      position: "absolute",
                      color: "#aaa",
                    }}
                  >
                    Size : {model.size}
                  </div>
                </td>
                <td id="Td3">{model.task}</td>
                <td id="Td4">{model.upload_time}</td>
                <td></td>
                <td>
                  <Button onClick={() => memoClick(index)}>
                    <ButtonSpan className="material-symbols-outlined">
                      question_mark
                    </ButtonSpan>
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => Edit(index, model.model_name, model.memo)}
                  >
                    <ButtonSpan className="material-symbols-outlined">
                      edit
                    </ButtonSpan>
                  </Button>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <Button onClick={() => DeleteCommunication(model.model_name)}>
                    <ButtonSpan className="material-symbols-outlined">
                      delete
                    </ButtonSpan>
                  </Button>
                </td>
              </tr>
              <tr key={index} width={100} style={{ borderTop: "none" }}>
                {onMemo.includes(index) && (
                  <td
                    colSpan={8}
                    style={{
                      textAlign: "left",
                      padding: "5px 60px 25px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#5f5f5f",
                      }}
                    >
                      memo
                    </span>
                    <div
                      style={{
                        color: "#5f5f5f",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                        width: "60%",
                        marginTop: "5px",
                      }}
                    >
                      {model.memo ? model.memo : "No memo."}
                      {edit === index && (
                        <input
                          type="text"
                          value={editMemo}
                          onChange={(e) => setEditMemo(e.target.value)}
                          style={{
                            position: "absolute",
                            left: "60px",
                            padding: "5px",
                            border: "1px solid #bbb",
                            zIndex: "10",
                            fontSize: "14px",
                            borderRadius: "3px",
                            width: "60%",
                          }}
                          onKeyDown={(event) =>
                            EditCommunication(
                              index,
                              model.model_name,
                              model.memo,
                              editName,
                              editMemo,
                              event
                            )
                          }
                        />
                      )}
                    </div>
                  </td>
                )}
              </tr>
            </Tbody>
          ))}
        </Table>
      ) : (
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            paddingTop: "300px",
            color: "#aaa",
          }}
        >
          The model does not exist. Please upload the model.
        </div>
      )}
    </TableContainer>
  );
};

export default TaskTable;
