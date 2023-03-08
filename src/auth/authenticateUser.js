import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const authenticateUser = () => {
  //Login authentication with sample user
  const loginPayload = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  axios
    .post("https://reqres.in/api/login", loginPayload)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);

      setAuthToken(token);

      window.location.href = "/";
    })
    .catch((error) => console.log(error));
};
