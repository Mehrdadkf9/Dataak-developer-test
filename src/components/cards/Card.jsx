import { Link } from "react-router-dom";
import { useAnswers } from "../../context/AnswersProvider";
import withRouter from "../withRouter/WithRouter";
import Comment from "./../../assets/icons/Comment";
import user from "./../../assets/images/user.png";
import { useState } from "react";
import { useEffect } from "react";
import { getAnswers } from "./../../api/api";

const Card = ({ question, router }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswers().then((res) => setAnswers(res.data));
  });

  const filteredAnswers = answers.filter(
    (answer) => question.id == answer.scope
  );

  return (
    <>
      <header className="shadow-modal rounded-lg opacity-70 bg-white flex justify-between p-2">
        <div className="flex items-center">
          <img
            className="rounded-lg ml-2"
            src={user}
            alt="profile"
            width={32}
            height={32}
          />
          <h3>{question.title}</h3>
        </div>
        <div className="flex items-center">
          <p className="border-l text-gray-700 ml-4 pl-4">
            ساعت :{question.time}
          </p>
          <p className="text-gray-700 pl-2">تاریخ: {question.date}</p>
          <Comment />
          {answers && filteredAnswers ? (
            <p className="mr-1">{filteredAnswers.length}</p>
          ) : (
            <p className="mr-1"> 0 </p>
          )}
        </div>
      </header>
      <section className="p-3">
        <p>{question.content}</p>
        {router.location.pathname !== "/" ? null : (
          <div className="flex justify-end">
            <Link to={`/${question.id}`}>
              <button className="border p-1 border-dataakPrimary text-dataakPrimary rounded-md">
                مشاهده جزئیات
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default withRouter(Card);
