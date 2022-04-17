import AddQuestion from "./components/addQuestion/AddQuestion";
import Card from "./components/cards/Card";
import TopBar from "./components/topBar/TopBar";
function App() {
  return (
    <div dir="rtl">
      <AddQuestion />
      <TopBar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="shadow-modal bg-dataakWhite rounded-lg w-4/5 mb-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
