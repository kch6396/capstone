// src/api/nameApi.js
const API_URL = "https://your-api-url.com/names";

export const createTask = async (taskName) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ taskName }),
  });
  return await response.json();
};

export const updateTask = async (oldName, newName) => {
  const response = await fetch(`${API_URL}/${oldName}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName }),
  });
  return await response.json();
};

export const deleteTask = async (taskName) => {
  await fetch(`${API_URL}/${taskName}`, {
    method: "DELETE",
  });
};

export const updateStatus = async (taskName, newStatus) => {
  const response = await fetch(`${API_URL}/${taskName}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: newStatus }),
  });
  return await response.json();
};

export const getTaskList = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}/tasks`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};
