import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-7fa7c.firebaseio.com/"
});

export default instance;
