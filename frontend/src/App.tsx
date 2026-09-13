import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/questionnaire" element={<QuestionPage />} />
    </Routes>
  );
}

export default App;
