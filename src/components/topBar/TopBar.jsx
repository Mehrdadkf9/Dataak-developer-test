import AddQuestion from "./../addQuestion/AddQuestion";
import profilePic from "./../../assets/images/profilePic.jpg";
import Polygon from "../../assets/icons/Polygon";
import { useQuestions } from "../../context/QuestionsProvider";
import withRouter from "../withRouter/WithRouter";
const TopBar = ({ router }) => {
  const pathname = router.location.pathname;
  const questions = useQuestions();
  return (
    <div className="flex justify-between pr-8 pl-8 p-2 shadow-topBar items-center w-full bg-white">
      <div className="flex items-center">
        <h1 className="text-xl">
          {pathname !== "/" ? "جزئیات سوال" : "لیست سوالات"}
        </h1>
        {pathname !== "/" ? null : (
          <span className="text-white text-2xl mr-3 rounded-circle pr-2 pl-2 bg-dataakPrimary">
            {questions.length}
          </span>
        )}
      </div>
      <div className="flex items-center gap-5">
        <AddQuestion />
        <img src={profilePic} alt="profile pic" />
        <p>مرضیه ابراهیمی</p>
        <Polygon />
      </div>
    </div>
  );
};

export default withRouter(TopBar);
