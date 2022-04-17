import Comment from "./../../assets/icons/Comment";
import user from "./../../assets/images/user.png";

const Card = () => {
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
          <h3>title</h3>
        </div>
        <div className="flex items-center">
          <p className="border-l text-gray-700 ml-4 pl-4">ساعت :time</p>
          <p className="text-gray-700 pl-2">تاریخ: date</p>
          <Comment />

          <p className="mr-1"> qty</p>
        </div>
      </header>
      <section className="p-3">
        <p>content</p>
        <div className="flex justify-end">
          <button className="border p-1 border-dataakPrimary text-dataakPrimary rounded-md">
            مشاهده جزئیات
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
