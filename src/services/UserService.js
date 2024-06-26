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

async function getInfo(token) {
  console.log(token)
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
  getInfo
}
