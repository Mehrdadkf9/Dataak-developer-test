import { useQuestions } from "../../context/QuestionsProvider";
import Card from "./Card";

const Cards = () => {
  const questions = useQuestions();

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {questions ? (
        questions.map((question) => (
          <div
            key={question.id}
            className="shadow-modal bg-dataakWhite rounded-lg w-4/5 mb-5"
          >
            <Card question={question} />
          </div>
        ))
      ) : (
        <p>loading server</p>
      )}
    </div>
  );
};

export default Cards;
