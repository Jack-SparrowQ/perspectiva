import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/questionnaire" element={<QuestionPage />} />
    </Routes>
  );
}

export default App;
