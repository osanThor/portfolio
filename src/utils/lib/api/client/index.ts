import axios from "axios";

const client = axios.create();
client.defaults.withCredentials = true;
client.defaults.baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default client;
