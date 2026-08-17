const API_URL = "http://localhost:5000/api/auth";

export async function userSignin(formData) {
    const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.json();
}

