import axios from "axios";

const SERVER = "http://localhost:3001";

export const getQuestions = () => axios.get(`${SERVER}/posts`);

export const getQuestionsDetail = (id) => axios.get(`${SERVER}/posts/${id}`);

export const postQuestion = (question) =>
  axios.post(`${SERVER}/posts`, { ...question });
