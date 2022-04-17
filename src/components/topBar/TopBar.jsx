import AddQuestion from "./../addQuestion/AddQuestion";
import profilePic from "./../../assets/images/profilePic.jpg";
import Polygon from "../../assets/icons/Polygon";
const TopBar = () => {
  return (
    <div className="flex justify-between pr-8 pl-8 p-2 shadow-topBar items-center w-full bg-white">
      <div className="flex items-center">
        <h1 className="text-xl">لیست سوالات</h1>
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

export default TopBar;
