import React, { createContext, useContext, useState } from "react";
import { postQuestion } from "../api/api";
import { getQuestions } from "../api/api";

const QuestionsContext = createContext();
const QuestionsContextDispatcher = createContext();

const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  return (
    <QuestionsContext.Provider value={questions}>
      <QuestionsContextDispatcher.Provider value={setQuestions}>
        {children}
      </QuestionsContextDispatcher.Provider>
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;

export const useQuestions = () => useContext(QuestionsContext);

export const useQuestionsActions = () => {
  const setQuestions = useContext(QuestionsContextDispatcher);

  const addQuestion = (question) => {
    postQuestion(question)
      .then(() => getQuestions())
      .then((res) => setQuestions(res.data));
  };

  const updateQuestions = (data) => {
    setQuestions(data);
  };

  return { addQuestion, updateQuestions };
};
