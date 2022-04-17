import axios from "axios";

const SERVER = "http://localhost:3001";

export const getQuestions = () => axios.get(`${SERVER}/posts`);

export const getQuestionsDetail = (id) => axios.get(`${SERVER}/posts/${id}`);

export const getAnswers = () => axios.get(`${SERVER}/answers`);

export const postQuestion = (question) =>
  axios.post(`${SERVER}/posts`, { ...question });

export const postAnswer = (answer, id) =>
  axios.post(`${SERVER}/answers/`, { ...answer, scope: id });
