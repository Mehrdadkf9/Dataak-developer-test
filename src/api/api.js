import axios from "axios";

const SERVER = "http://localhost:3001";

export const getQuestions = () => axios.get(`${SERVER}/posts`);

export const postQuestion = (question) =>
  axios.post(`${SERVER}/posts`, { ...question });
