import axios from "axios";

const KEY = "AIzaSyDbo4czY0yJFz_dQEGZNx1l3HMZfCeW-Xk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
