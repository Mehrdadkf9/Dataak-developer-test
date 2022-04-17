import { Route, Routes } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" exact element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
