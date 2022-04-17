import React, { useEffect, useState } from "react";
import AnswersCards from "../components/answers/AnswersCards";
import Card from "../components/cards/Card";
import TopBar from "../components/topBar/TopBar";
import withRouter from "../components/withRouter/WithRouter";
import { useAnswers, useAnswersActions } from "../context/AnswersProvider";
import { getAnswers, getQuestionsDetail } from "./../api/api";

const QuestionDetails = ({ router }) => {
  const [question, setQuestion] = useState({});
  const questionDetailId = router.params.id;

  const { updateAnswers } = useAnswersActions();
  const answers = useAnswers();
  // console.log(answers);

  useEffect(() => {
    getQuestionsDetail(questionDetailId).then((res) => setQuestion(res.data));
    getAnswers().then((res) => updateAnswers(res.data));
  }, []);

  return (
    <div>
      <TopBar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-4/5">
          <div
            key={question.id}
            className="shadow-modal bg-dataakWhite rounded-lg mb-5"
          >
            <Card question={question} answers={answers} />
          </div>

          <AnswersCards answers={answers} question={question} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(QuestionDetails);
