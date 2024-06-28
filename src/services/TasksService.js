import config from "../config/index.js";

async function getTasks(token) {
  const res = await fetch(`${config.API_URL}/api/tasks/`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
}

async function updateTaskStatus(token, taskId, taskName, newStatus) {
  const res = await fetch(`${config.API_URL}/api/tasks/${taskId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name: taskName, status: newStatus }),
  });

  return res.json();
}

async function editTask(token, taskId, taskName, taskPriority) {
  const res = await fetch(`${config.API_URL}/api/tasks/${taskId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name: taskName, priority: taskPriority }),
  });

  return res.json();
}

async function deleteTask(token, taskId) {
  const res = await fetch(`${config.API_URL}/api/tasks/${taskId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (res.status !== 204) {
    const data = await res.text();
    return data ? JSON.parse(data) : {};
  }

  return {};
}

async function createTask(token, taskName) {
  const res = await fetch(`${config.API_URL}/api/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name: taskName }),
  });

  return res.json();
}

export { getTasks, updateTaskStatus, deleteTask, createTask, editTask };

export default getTasks;
