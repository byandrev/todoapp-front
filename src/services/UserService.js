
import config from "../config/index.js";

async function login(username, password) {
  const res = await fetch(`${config.API_URL}/api/token/`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

async function register(data) {
  const res = await fetch(`${config.API_URL}/api/users/`, {
    method: "POST",
    body: JSON.stringify({
      username: data?.username,
      password: data?.password,
      email: data?.email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataRes = await res.json();
  
  if (!res.ok) {
    let messageError = dataRes?.username?.join('.') ?? ""
    messageError += dataRes?.password?.join('.') ?? ""
    throw new Error(messageError)
  }
  
  return dataRes
}

async function getInfo(token) {
  const res = await fetch(`${config.API_URL}/api/token/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token })
  });
  
  return res.json();
}

async function getUserInfo(token) {
  const res = await fetch(`${config.API_URL}/api/user/`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

async function update(token, data) {
  const res = await fetch(`${config.API_URL}/api/users/${data.id}/update/`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
      photo: data.photo,
      bio: data.bio,
    }),
  });
  if (!res.ok) {
    throw new Error('Failed to update user');
  }

  return await res.json();
}

export {
  login,
  getInfo,
  register,
  getUserInfo,
  update,
}
