import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import QuestionsProvider from "./context/QuestionsProvider";
import AnswersProvider from "./context/AnswersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
        <AnswersProvider>
          <App />
        </AnswersProvider>
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
