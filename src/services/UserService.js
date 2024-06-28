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

export {
  login,
  getInfo,
  register
}
