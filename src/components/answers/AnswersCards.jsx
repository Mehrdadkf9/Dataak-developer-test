import React from "react";
import AddAnswer from "../addAnswer/AddAnswer";
import AnswersCard from "./AnswersCard";

const AnswersCards = ({ answers, question }) => {
  const filteredAnswers = answers.filter(
    (answer) => answer.scope === question.id
  );
  // console.log(filteredAnswers);

  return (
    <div>
      {filteredAnswers.length !== 0 && (
        <h1 className="text-xl mb-5">پاسخ‌ها</h1>
      )}

      {filteredAnswers ? (
        filteredAnswers.map((answer) => (
          <div
            key={answer.id}
            className="shadow-modal bg-dataakWhite rounded-lg mb-5"
          >
            <AnswersCard answer={answer} />
          </div>
        ))
      ) : (
        <p>اولین پاسخ را ثبت کنید</p>
      )}
      <AddAnswer id={question.id} />
    </div>
  );
};

export default AnswersCards;
