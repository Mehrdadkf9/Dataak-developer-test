import { useState } from "react";
import Close from "./../../assets/icons/Close";
const AddQuestion = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-dataakPrimary text-white rounded-md p-2 text-xs"
      >
        <span className="ml-2">+</span>
        ثبت سوال جدید
      </button>
      {showModal && (
        <>
          <div className="w-full h-full bg-gray-500 opacity-40 absolute left-0 top-0 z-10"></div>
          <div className="absolute w-full flex flex-col items-center justify-center left-0 top-1/4 z-50">
            <div
              className={`bg-dataakWhite border rounded-lg w-1/2 shadow-modal`}
            >
              <div
                className={`flex justify-between bg-white p-2 rounded-lg shadow-modal`}
              >
                <h3>ایجاد سوال جدید</h3>
                <button onClick={() => setShowModal(false)}>
                  <Close />
                </button>
              </div>
              <div className="flex flex-col p-5">
                <label>موضوع</label>
                <input
                  className="border-dataakGray border rounded-md mt-2 pr-3"
                  type="text"
                  name="title"
                />
                <label>متن سوال</label>
                <textarea
                  className="border-dataakGray border rounded-md mt-2 pr-3"
                  type="text"
                  name="content"
                />
              </div>
              <div className="flex justify-end mt-2 p-5">
                <button
                  onClick={() => setShowModal(false)}
                  className="border-dataakPrimary text-dataakPrimary rounded-md p-2 ml-2"
                >
                  انصراف
                </button>
                <button className="bg-dataakPrimary text-white rounded-md p-2">
                  ایجاد سوال
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AddQuestion;
