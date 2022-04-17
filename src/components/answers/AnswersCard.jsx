import React from "react";
import user from "./../../assets/images/user.png";
import Happy from "./../../assets/icons/Happy";
import Sad from "../../assets/icons/Sad";

const AnswersCard = ({ answer }) => {
  return (
    <>
      <header className="shadow-modal border rounded-lg opacity-70 bg-white flex justify-between p-2">
        <div className="flex items-center">
          <img
            className="rounded-lg ml-2"
            src={user}
            alt="user"
            width={32}
            height={32}
          />
          <h3>سید مصطفی</h3>
        </div>
        <div className="flex items-center">
          <p className="border-l text-gray-700 ml-4 pl-4">
            ساعت :{answer.time}
          </p>
          <p className="text-gray-700 pl-2">تاریخ: {answer.date}</p>
          <Happy />
          <span className="mr-1 ml-1">{answer.like}</span>
          <Sad color="#9CAEBB" />
          <span className="mr-1 ml-1">{answer.disLike}</span>
        </div>
      </header>
      <section className="p-3">
        <p>{answer.content}</p>
        <div className="flex justify-end">
          {/* if we have auth , we can limit click of buttons to 1 time for happy or sad */}
          <button className="flex items-center ml-2 border p-1 border-dataakSuccess text-dataakSuccess rounded-md">
            <Happy />
            پاسخ خوب بود
          </button>
          <button className="flex items-center ml-2 border p-1 border-dataakError text-dataakError rounded-md">
            <Sad color="#F16063" />
            پاسخ خوب نبود
          </button>
        </div>
      </section>
    </>
  );
};

export default AnswersCard;
