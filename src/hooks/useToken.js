import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user.email;
    if (email) {
      fetch("https://68933934002e1bfd3079.syd.appwrite.run/token", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const token = data.accessToken;
          localStorage.setItem("accessToken", token);
          setToken(token);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
