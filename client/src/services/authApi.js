const API_URL = "http://localhost:5000/api/auth";

export async function userSignin(formData) {
  console.log("Sending:", formData);
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }
  
  return data;
}

export async function createAccount(formData) {
  console.log("Sending:", formData);
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("Status:", res.status);
  return res.json();
}

export async function userLogout() {
  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  console.log("Status:", res.status);
  return res.json();
}