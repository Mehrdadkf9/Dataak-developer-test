import React, { useEffect } from "react";
import { getQuestions } from "../api/api";
import Cards from "../components/cards/Cards";
import TopBar from "../components/topBar/TopBar";
import { useQuestionsActions } from "../context/QuestionsProvider";

const QuestionsPage = () => {
  const { updateQuestions } = useQuestionsActions();

  useEffect(() => {
    getQuestions().then((res) => updateQuestions(res.data));
  }, []);

  return (
    <div>
      <TopBar />
      <Cards />
    </div>
  );
};

export default QuestionsPage;
