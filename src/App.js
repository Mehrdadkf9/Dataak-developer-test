import { Route, Routes } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import QuestionDetails from "./pages/QuestionDetails";

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/:id" element={<QuestionDetails />} />
        <Route path="/" exact element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
