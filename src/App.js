import Card from "./components/cards/Card";
function App() {
  return (
    <div dir="rtl">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="shadow-modal bg-dataakWhite rounded-lg w-4/5 mb-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
