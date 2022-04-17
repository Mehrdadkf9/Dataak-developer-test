import { createContext, useContext, useState } from "react";
import { postAnswer } from "../api/api";
import { getAnswers } from "../api/api";

const AnswersContext = createContext();
const AnswersContextDispatcher = createContext();

const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswersContext.Provider value={answers}>
      <AnswersContextDispatcher.Provider value={setAnswers}>
        {children}
      </AnswersContextDispatcher.Provider>
    </AnswersContext.Provider>
  );
};

export default AnswersProvider;

export const useAnswers = () => useContext(AnswersContext);

export const useAnswersActions = () => {
  const setAnswers = useContext(AnswersContextDispatcher);

  const addAnswer = (answer, id) => {
    postAnswer(answer, id)
      .then(() => getAnswers())
      .then((res) => setAnswers(res.data));
  };

  const updateAnswers = (data) => {
    setAnswers(data);
  };

  return { updateAnswers, addAnswer };
};
