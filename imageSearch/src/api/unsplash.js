import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID r5Brpp1q1wbPVTugRoGSr3JlfNFCWTCub8aKheZ4gvw"
  }
});
