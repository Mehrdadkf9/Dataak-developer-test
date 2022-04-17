import React, { useEffect, useState } from "react";
import Card from "../components/cards/Card";
import TopBar from "../components/topBar/TopBar";
import withRouter from "../components/withRouter/WithRouter";
import { getQuestionsDetail } from "./../api/api";

const QuestionDetails = ({ router }) => {
  const [question, setQuestion] = useState({});
  const questionDetailId = router.params.id;

  useEffect(() => {
    getQuestionsDetail(questionDetailId).then((res) => setQuestion(res.data));
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
            <Card question={question} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(QuestionDetails);
