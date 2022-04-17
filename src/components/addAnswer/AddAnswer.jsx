import { useState } from "react";
import { useAnswersActions } from "../../context/AnswersProvider";

const AddAnswer = ({ id }) => {
  const { addAnswer } = useAnswersActions();
  const [newAnswer, setNewAnswer] = useState({
    content: "",
    time: "",
    date: "",
  });

  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = new Date().toLocaleDateString("fa-IR");

  const changeHandler = (e) => {
    setNewAnswer({
      ...newAnswer,
      content: e.target.value,
      time: time,
      date: date,
    });
  };

  const addNewAnswer = (answer) => {
    setNewAnswer({ answer });
    addAnswer(answer, id);
    setNewAnswer({ content: "" });
  };

  return (
    <div className="mb-10">
      <h1 className="text-xl mb-4">پاسخ خود را ثبت کنید</h1>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          addNewAnswer(newAnswer);
        }}
      >
        <label className="text-xs">پاسخ خود را بنویسید</label>
        <textarea
          name="content"
          placeholder="متن پاسخ ..."
          rows={5}
          className="w-full rounded-md p-4 text-sm mt-3 mb-3"
          onChange={changeHandler}
          value={newAnswer.content}
        ></textarea>

        <button
          className="bg-dataakPrimary text-white rounded-md w-48 p-2 text-xs "
          type="submit"
        >
          ارسال پاسخ
        </button>
      </form>
    </div>
  );
};

export default AddAnswer;
